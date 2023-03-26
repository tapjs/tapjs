import { mkdirpSync } from 'mkdirp'
import { linkSync, statSync, symlinkSync, writeFileSync } from 'node:fs'
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

export type FixtureContent<T> = T extends 'file'
  ? string | Buffer | Uint8Array
  : T extends 'link' | 'symlink'
  ? string
  : T extends 'dir'
  ? FixtureDir
  : never

const assertValidContent: (type: FixtureType, content: any) => void = <
  T extends FixtureType
>(
  type: T,
  content: any
): asserts content is FixtureContent<T> => {
  switch (type) {
    case 'dir':
      if (!content || typeof content !== 'object') {
        throw new TypeError('dir fixture must have object content')
      }
      break
    case 'file':
      if (
        typeof content !== 'string' &&
        !Buffer.isBuffer(content) &&
        !(content instanceof Uint8Array)
      ) {
        throw new TypeError('file fixture must have string/buffer content')
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
    f: FixtureDirContent,
    symlinks: null | { [k: string]: string } = null
  ) {
    if (
      typeof f === 'string' ||
      Buffer.isBuffer(f) ||
      f instanceof Uint8Array
    ) {
      f = new Fixture('file', f)
    } else if (f && typeof f === 'object' && !(f instanceof Fixture)) {
      f = new Fixture('dir', f)
    } else if (!(f instanceof Fixture)) {
      throw new Error('invalid fixture type: ' + f)
    }

    const isRoot = symlinks === null
    symlinks = symlinks || {}

    switch (f.type) {
      case 'symlink':
        // have to gather up symlinks for the end, because windows
        symlinks[abs] = f.content
        break
      case 'link':
        linkSync(resolve(dirname(abs), f.content), abs)
        break
      case 'dir':
        mkdirpSync(abs)
        for (const [name, fixture] of Object.entries(f.content))
          Fixture.make(`${abs}/${name}`, fixture, symlinks)
        break
      case 'file':
        writeFileSync(abs, f.content)
        break
    }

    // create all those symlinks we were asked for
    if (isRoot) {
      for (const [abs, target] of Object.entries(symlinks)) {
        symlinkSync(target, abs, isDir(abs, target) ? 'junction' : 'file')
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
