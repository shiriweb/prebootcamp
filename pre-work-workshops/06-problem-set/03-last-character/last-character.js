// YOUR CODE BELOW
function lastCharacter(first, second) {
  if (first[first.length - 1] === second[second.length - 1]) {
    return true;
  } else {
    return false;
  }
}
let result = lastCharacter("sink", "pinks");
console.log(result);
