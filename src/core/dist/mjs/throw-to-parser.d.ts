import { Parser } from 'tap-parser';
import { Extra } from './index.js';
/**
 * Provides a way for Spawn and Worker instances to handle thrown
 * errors in their TAP subtest block, rather than always having to
 * proxy their throws to the parent, since they lack any TAP generation
 * methods like TestBase.
 */
export declare const throwToParser: (parser: Parser, extra?: Extra | undefined | void) => Extra | undefined;
//# sourceMappingURL=throw-to-parser.d.ts.map