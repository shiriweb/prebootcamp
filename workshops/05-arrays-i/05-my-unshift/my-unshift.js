// YOUR CODE BELOW
function myUnshift(array, value) {
  let newArray = [value];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
