// YOUR CODE BELOW
function add(a,b){
  return a+b
}
function partial(callback,num1){
  return function(num2){
    return callback(num1,num2)
  }
}