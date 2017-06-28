// Contains private property/method definitions so that their use in the tests
// passes the TypeScript compiler.

declare global {
  namespace Tap {
    export interface Test {
      _timeout: number;
      _timer: any;
    }
  }
}
export {};
