// YOUR CODE BELOW
function compareObjects(object1, object2) {
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  for (let key in object2) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
