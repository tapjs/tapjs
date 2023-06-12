"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// import it so that node sees the source map
require("./eval-error.js");
const errFile = require.resolve('./eval-error.js');
const code = (0, fs_1.readFileSync)(errFile, 'utf8') + '\nevalError()';
eval(code);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC1ldmFsLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZhbC1ldmFsLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQWlDO0FBQ2pDLDZDQUE2QztBQUM3QywyQkFBd0I7QUFDeEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELE1BQU0sSUFBSSxHQUFHLElBQUEsaUJBQVksRUFBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFBO0FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9