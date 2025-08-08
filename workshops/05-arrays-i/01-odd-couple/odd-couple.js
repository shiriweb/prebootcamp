// YOUR CODE BELOW
function oddCouple(originalArray) {
  let newArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] % 2 === 1) {
      newArray.push(originalArray[i]);
    }
    if (newArray.length === 2) {
      return newArray;
    }
  }
  return newArray;
}
