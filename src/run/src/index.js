#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
process.setSourceMapsEnabled(true);
var build_js_1 = require("./build.js");
var dump_config_js_1 = require("./dump-config.js");
var help_js_1 = require("./help.js");
var list_js_1 = require("./list.js");
var plugin_js_1 = require("./plugin.js");
var report_js_1 = require("./report.js");
var run_js_1 = require("./run.js");
var version_js_1 = require("./version.js");
var main_config_js_1 = require("./main-config.js");
process.title = 'tap';
switch (main_config_js_1.mainCommand) {
    case 'help':
        (0, help_js_1.help)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'versions':
    case 'version':
        (0, version_js_1.version)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'run':
        (0, run_js_1.run)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'build':
        (0, build_js_1.build)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'report':
        (0, report_js_1.report)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'dump-config':
        (0, dump_config_js_1.dumpConfig)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'plugin':
        (0, plugin_js_1.plugin)(main_config_js_1.args, main_config_js_1.config);
        break;
    case 'list':
        (0, list_js_1.list)(main_config_js_1.args, main_config_js_1.config);
        break;
}
