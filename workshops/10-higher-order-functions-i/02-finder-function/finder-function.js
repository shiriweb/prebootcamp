// YOUR CODE BELOW
function finderFunction(array, callback) {
  for(let i=0;i<array.length;i++){
    let value= array[i]
    let element= callback(value)
    if(element){
      return i
    }
  }
  return -1
}
let numbers=[1,3,2,8,7]
function isEven(num) {
  return num%2===0;
}
