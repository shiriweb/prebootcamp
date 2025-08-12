// YOUR CODE BELOW
let addsNums = {
  addTen: function (num) {
    return num + 10;
  },
  addTwenty: function (num) {
    return num + 20;
  },
  someProperty: "value"
};
function callThemAll(object, value) {
  let newValue = [];
  for (let key in object) {
    let result = object[key];
    if (typeof result === "function") {
      let results = result(value);
      newValue.push(results);
    }
  }
  return newValue;}