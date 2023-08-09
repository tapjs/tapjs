const code = `
const stack = (cs) => {
  const { prepareStackTrace } = Error
  if (cs) Error.prepareStackTrace = (e, c) => c
  const { stack } = new Error('trace')
  Error.prepareStackTrace = prepareStackTrace
  return stack
}
stack
`;
const getStackSymbol = Symbol('get (stack) <symbol> lol');
class Foo {
    get callSiteStack() {
        return this.#privateGetStack(true);
    }
    get stringStack() {
        return this.#privateGetStack(false);
    }
    #privateGetStack(cs) {
        return this[getStackSymbol](cs);
    }
    [getStackSymbol](cs) {
        return eval(code)(cs);
    }
}
export const stringStack = () => new Foo().stringStack;
export const callSiteStack = () => new Foo().callSiteStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC1jYWxsLXNpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmFsLWNhbGwtc2l0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLElBQUksR0FBRzs7Ozs7Ozs7O0NBU1osQ0FBQTtBQUNELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELE1BQU0sR0FBRztJQUNQLElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsRUFBVztRQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQTtBQUN0RCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUEifQ==