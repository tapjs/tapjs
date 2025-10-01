import { mkdirpSync } from 'mkdirp'
import {
  linkSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { dirname, resolve } from 'path'

export type FixtureType = 'file' | 'dir' | 'link' | 'symlink'
export interface FixtureDir {
  [entry: string]: FixtureDirContent
}

export type FixtureDirContent =
  | string
  | Buffer
  | Uint8Array
  | FixtureDir
  | Fixture<'file'>
  | Fixture<'dir'>
  | Fixture<'link'>
  | Fixture<'symlink'>

export type FixtureContent<T> =
  T extends 'file' ? string | Buffer | Uint8Array
  : T extends 'link' | 'symlink' ? string
  : T extends 'dir' ? FixtureDir
  : never

type GetType<T extends FixtureDirContent> =
  T extends Fixture<infer Type> ? Type
  : T extends string | Buffer | Uint8Array ? 'file'
  : T extends number | symbol | bigint ? never
  : T extends {} ? 'dir'
  : never

const validateDirContents = (
  content: Record<string, FixtureDirContent>,
  seen: Set<Record<string, FixtureDirContent>>,
) => {
  for (const [f, v] of Object.entries(content)) {
    const t = rawToType(v)
    if (
      v &&
      typeof v === 'object' &&
      t === 'dir' &&
      !(v instanceof Fixture)
    ) {
      const r = v as Record<string, FixtureDirContent>
      if (seen.has(r)) {
        throw new Error(
          'cycle detected in t.fixture contents at ' + f,
        )
      }
      seen.add(r)
      validateDirContents(r, seen)
    }
  }
}

const assertValidContent: (
  type: FixtureType,
  content: any,
) => void = <T extends FixtureType>(
  type: T,
  content: any,
): asserts content is FixtureContent<T> => {
  switch (type) {
    case 'dir':
      if (!content || typeof content !== 'object') {
        throw new TypeError('dir fixture must have object content')
      }
      validateDirContents(content, new Set([content]))
      break
    case 'file':
      if (
        typeof content !== 'string' &&
        !Buffer.isBuffer(content) &&
        !(content instanceof Uint8Array)
      ) {
        throw new TypeError(
          'file fixture must have string/buffer content',
        )
      }
      break
    case 'link':
    case 'symlink':
      if (typeof content !== 'string') {
        throw new TypeError(type + ' fixture must have string target')
      }
      break
    default:
      throw new Error('invalid fixture type: ' + type)
  }
}

const rawToType = (f: FixtureDirContent): FixtureType => {
  if (f instanceof Fixture) {
    return f.type
  } else if (
    typeof f === 'string' ||
    Buffer.isBuffer(f) ||
    f instanceof Uint8Array
  ) {
    return 'file'
  } else if (f && typeof f === 'object') {
    return 'dir'
  }
  throw new Error('invalid fixture type: ' + f)
}

const rawToFixture = (
  f: FixtureDirContent,
): Fixture<GetType<typeof f>> =>
  f instanceof Fixture ? f : new Fixture(rawToType(f), f)

const isSymlinkF = (
  f: Fixture<FixtureType>,
): f is Fixture<'symlink'> => f.type === 'symlink'
const isLinkF = (f: Fixture<FixtureType>): f is Fixture<'link'> =>
  f.type === 'link'
const isDirF = (f: Fixture<FixtureType>): f is Fixture<'dir'> =>
  f.type === 'dir'
const isFileF = (f: Fixture<FixtureType>): f is Fixture<'file'> =>
  f.type === 'file'

export class Fixture<T extends FixtureType> {
  type: T
  content: FixtureContent<T>
  constructor(type: T, content: FixtureContent<T>) {
    assertValidContent(type, content)
    this.type = type
    this.content = content
  }

  get [Symbol.toStringTag]() {
    return 'Fixture<' + this.type + '>'
  }

  // have to gather up symlinks for the end
  static make(
    abs: string,
    content: FixtureDirContent,
    symlinks: null | { [k: string]: string } = null,
  ) {
    const f = rawToFixture(content)

    const isRoot = symlinks === null
    symlinks = symlinks || {}

    if (isSymlinkF(f)) {
      // have to gather up symlinks for the end, because windows
      symlinks[abs] = f.content
    } else if (isLinkF(f)) {
      linkSync(resolve(dirname(abs), f.content), abs)
    } else if (isDirF(f)) {
      mkdirpSync(abs)
      for (const [name, fixture] of Object.entries(f.content))
        Fixture.make(`${abs}/${name}`, fixture, symlinks)
    } else if (isFileF(f)) {
      writeFileSync(abs, f.content as string)
      /* c8 ignore start */
    } else {
      // already validated above, impossible here
      throw new Error('uknown fixture type: ' + f.type)
    }
    /* c8 ignore stop */

    // create all those symlinks we were asked for
    if (isRoot) {
      for (const [abs, target] of Object.entries(symlinks)) {
        symlinkSync(
          target,
          abs,
          isDir(abs, target) ? 'junction' : 'file',
        )
      }
    }
  }
}

// check if a symlink target is a directory
const isDir = (abs: string, target: string) => {
  try {
    return statSync(resolve(dirname(abs), target)).isDirectory()
  } catch (er) {
    return false
  }
}
