// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  }
  let newNum = 0;

  while (currentNum < targetNum) {
    currentNum *= 2;
    newNum += 20;
  }
  return newNum;
}
