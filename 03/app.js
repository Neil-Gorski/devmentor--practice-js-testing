export default function randomNumber(min, max) {
  if (min === max) {
    return max;
  }
  return Math.random();
}
