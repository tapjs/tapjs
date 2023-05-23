declare module 'read' {
  import { ReadLineOptions } from 'readline'
  export interface ReadOptions<T extends string | number = string> {
    default?: T
    input?: ReadLineOptions['input'] & {
      isTTY?: boolean
    }
    output?: ReadLineOptions['output'] & {
      isTTY?: boolean
    }
    prompt?: string
    silent?: boolean
    timeout?: number
    edit?: boolean
    terminal?: boolean
    replace?: string
  }
  export default function read<T extends string | number = string>({
    default: def,
    input,
    output,
    prompt,
    silent,
    timeout,
    edit,
    terminal,
    replace,
  }: ReadOptions<T>): Promise<T | string>
}
