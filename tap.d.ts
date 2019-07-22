// Type definitions for tap 14.4.2
// Project: tap
// Definitions by: Dmitry Mazurok <https://github.com/Eoksni>

declare interface Export extends internal.TAP {
  default: Export;
  t: Export;
  Test: typeof internal.Test;
}

declare const tap: Export;

export = tap;

declare namespace tap {}

declare namespace internal {
  export class TAP extends Test {}

  export class Test {
    pass(message?: string, extra?: Options.Assert): boolean;
  }

  export namespace Options {
    export interface Assert {
      todo?: boolean | string;
      skip?: boolean | string;
    }
  }
}
