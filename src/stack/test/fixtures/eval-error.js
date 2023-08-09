import { readFileSync } from 'fs';
// import it so that node sees the source map
import './error.js';
const errFile = require.resolve('./error.js');
const code = readFileSync(errFile, 'utf8') + '\nerror()';
const evalError = () => {
    eval(code);
};
evalError();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2YWwtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLElBQUksQ0FBQTtBQUNqQyw2Q0FBNkM7QUFDN0MsT0FBTyxZQUFZLENBQUE7QUFDbkIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM3QyxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQTtBQUN4RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7SUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ1osQ0FBQyxDQUFBO0FBQ0QsU0FBUyxFQUFFLENBQUEifQ==