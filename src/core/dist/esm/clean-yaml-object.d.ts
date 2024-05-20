/**
 * Prepare an object for printing to YAML diagnostics.
 *
 * Looks up source, calculates diffs of actual/expected values, and so on.
 */
export declare const cleanYamlObject: (obj: {
    [k: string]: any;
}, seen?: Set<any>) => {
    [x: string]: any;
};
/**
 * Properties that are *always* removed from the diagnostics, either because
 * they are internal (eg, `time`), overly noisy (eg, `parent`), or captured
 * elsewhere in the TAP output (eg, `skip`).
 */
export declare const deleteAlways: Set<string>;
/**
 * Fields on this list are removed from YAML diagnostics if they are empty
 * (ie, falsey, empty array, or object with no keys)
 */
export declare const deleteIfEmpty: Set<string>;
/**
 * Fields are removed from YAML diagnostics if they match any of these
 * patterns.
 */
export declare const deleteIfMatch: RegExp[];
//# sourceMappingURL=clean-yaml-object.d.ts.map