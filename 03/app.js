export default function randomNumber(min, max) {
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
