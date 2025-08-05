// YOUR CODE BELOW
function myMnemonic(a, b, c, d) {
  let result = "";

  if (a) {
    result += a[0];
  }
  if (b) {
    result += b[0];
  }
  if (c) {
    result += c[0];
  }
  if (d) {
    result += d[0];
  }
  return result.toUpperCase();
}
let finalResult = myMnemonic("one", "two", "three", "four");
console.log(finalResult);
