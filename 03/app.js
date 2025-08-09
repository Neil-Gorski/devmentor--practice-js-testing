export default function randomNumber(min, max) {
  checkArgType(min, "number");
  checkArgType(max, "number");
  if (min === max) {
    return max;
  }
  checkIfMinIsBiggerMax(min, max);

  return Math.random();
}

function checkArgType(arg, type) {
  if (typeof arg !== type) {
    throw new Error(`Arg: ${arg} has not the type of ${type}`);
  }
}

function checkIfMinIsBiggerMax(min, max) {
  if (min > max) {
    throw new Error(`Ar1: ${min} > Arg2: ${max}`);
  }
}

function getRundomNumber(min, max) {
  const range = max - min;
  const randomNumber = Math.random() * range + min;
  let num = 12;
  return Math.round(randomNumber);
}
