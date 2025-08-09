import randomNumber from "./app";

it("return a number of type number", () => {
  const randomNum = randomNumber(1, 4);
  expect(typeof randomNum).toBe("number");
});

it("return error when as 1st argument not a number has been passed.", () => {
  const arg1 = "5";
  const arg2 = 8;
  expect(() => randomNumber(arg1, arg2)).toThrow();
});

it("return error when as 2nd argument not a number has been passed.", () => {
  const arg1 = 5;
  const arg2 = "8";
  expect(() => randomNumber(arg1, arg2)).toThrow();
});

it("return error when the 1st argument ist less then the 2nd.", () => {
  const arg1 = 5;
  const arg2 = 3;
  expect(() => randomNumber(arg1, arg2)).toThrow();
});

it("return 7 when 1st & 2nd arg is 7", () => {
  const arg1 = 7;
  const arg2 = 7;
  const randomNum = randomNumber(arg1, arg2);
  expect(randomNum).toBe(7);
});

it("return a number between -3 and 3 if 1st arg is -3 and 2nd 3", () => {
  const arg1 = -3;
  const arg2 = 3;
  const randomNum = randomNumber(arg1, arg2);
  expect(randomNum).toBe(randomNum >= arg1 || randomNum <= arg2);
});
