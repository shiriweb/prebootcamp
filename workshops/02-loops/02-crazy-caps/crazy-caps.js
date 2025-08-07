// YOUR CODE BELOW
function crazyCaps(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result = result + string[i].toLowerCase();
    } else {
      result = result + string[i].toUpperCase();
    }
  }
  
  return result;
}

