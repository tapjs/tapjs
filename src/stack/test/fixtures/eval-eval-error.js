import { readFileSync } from 'fs';
// import it so that node sees the source map
import './eval-error.js';
const errFile = require.resolve('./eval-error.js');
const code = readFileSync(errFile, 'utf8') + '\nevalError()';
eval(code);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC1ldmFsLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXZhbC1ldmFsLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxJQUFJLENBQUE7QUFDakMsNkNBQTZDO0FBQzdDLE9BQU8saUJBQWlCLENBQUE7QUFDeEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFBO0FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9