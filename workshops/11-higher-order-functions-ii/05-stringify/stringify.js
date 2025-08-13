// YOUR CODE BELOW
function returnsANumber() {
  return 100;
}

function stringify(callback){
  return function(){
    let callbackResult= callback()
    callbackResult= String(callbackResult)
    return callbackResult
  }
}