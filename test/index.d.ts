// Contains private property/method definitions so that their use in the tests
// passes the TypeScript compiler.

declare global {
  namespace Tap {
    export interface Test {
      _timeout: number;
      _timer: any;
      _parent: any;
      _ok: any;
      Stdin: any;
      parser: any;
      promise: any;
      processing: any;
    }
  }
  namespace NodeJS {
    interface EventEmitter {
      truthy: any;
      _eventsCount: any;
      _maxListeners: any;
    }
  }
  interface TypeError {
    code?: number;
    syscall?: string;
  }
  interface Error {
    code?: number|string;
    jerk?: any;
    syscall?: any;
  }
  // Mocha
  function describe(...args):any;
  function it(...args):any;
  function before(...args):any;
  function after(...args):any;
  function beforeEach(...args):any;
  function afterEach(...args):any;
  function context(...args):any;
}
export {};
