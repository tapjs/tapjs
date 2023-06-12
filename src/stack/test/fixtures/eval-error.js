"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// import it so that node sees the source map
require("./error.js");
const errFile = require.resolve('./error.js');
const code = (0, fs_1.readFileSync)(errFile, 'utf8') + '\nerror()';
const evalError = () => {
    eval(code);
};
evalError();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2YWwtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBaUM7QUFDakMsNkNBQTZDO0FBQzdDLHNCQUFtQjtBQUNuQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzdDLE1BQU0sSUFBSSxHQUFHLElBQUEsaUJBQVksRUFBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFBO0FBQ3hELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDWixDQUFDLENBQUE7QUFDRCxTQUFTLEVBQUUsQ0FBQSJ9