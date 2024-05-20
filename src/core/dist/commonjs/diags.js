"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diags = void 0;
const tap_yaml_1 = __importDefault(require("tap-yaml"));
const clean_yaml_object_js_1 = require("./clean-yaml-object.js");
const hasDefinedKey = (o) => {
    for (const v of Object.values(o)) {
        if (v !== undefined && v !== null)
            return true;
    }
    return false;
};
/**
 * Print the YAML diagnostics based on the {@link @tapjs/core!index.Extra}
 * object received
 */
const diags = (obj) => {
    const clean = (0, clean_yaml_object_js_1.cleanYamlObject)(obj);
    if (!clean || typeof clean !== 'object' || !hasDefinedKey(clean)) {
        return '';
    }
    return ('  ---\n' +
        tap_yaml_1.default
            .stringify(clean)
            .split('\n')
            .map(l => (l.trim() ? '  ' + l : l.trim()))
            .join('\n') +
        '  ...\n');
};
exports.diags = diags;
//# sourceMappingURL=diags.js.map