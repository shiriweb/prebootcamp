// YOUR CODE BELOW
let sum=0
function myForEach(array,callback) {
  for (let i=0; i<array.length; i++) {
    let element=array[i];
    callback(element,i);
  }
}
function addition(numb){
  sum+=numb
}