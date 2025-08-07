// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
  if (startIdx === undefined) {
    startIdx = 0;
  }

  for (let i = startIdx; i < source.length; i++) {
    let substring = source.slice(i, i + searchValue.length);
    console.log(substring);
    if (substring === searchValue) {
      return i;
    }
  }
  return -1;
}

