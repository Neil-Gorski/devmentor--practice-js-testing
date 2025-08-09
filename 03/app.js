export default function randomNumber(min, max) {
  checkArgType(min, "number");
  checkArgType(max, "number");
  if (min === max) {
    return max;
  }

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
