// YOUR CODE BELOW
function chainReaction(startValue,callback){
  callback.forEach(function(callback){
    startValue =callback(startValue)
  })
    return startValue
}
function addTen(num) {
  return num+10;
}

function subtractFive(num) {
  return num-5;
}

function multiplyFive(num) {
  return num*5;
}