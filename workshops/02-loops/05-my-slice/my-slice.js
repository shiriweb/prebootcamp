// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
  if (startIdx === undefined) {
    return originalString;
  }
  if (endIdx === undefined) {
    endIdx = originalString.length;
  }

  let slicedResult = "";
  for (let i = startIdx; i < endIdx; i++) {
    slicedResult = slicedResult + originalString[i];
  }
  return slicedResult;
}
let result = mySlice("hello world", 0, 5);
console.log(result);
