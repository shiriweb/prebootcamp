// YOUR CODE BELOW
function onlyOne(value1, value2, value3){
  if(!!value1 && !value2 && !value3){
    return true
  }
  else if(!value1 && !!value2 && !value3){
    return true
  }
  else if(!value1 && !value2 && !!value3){
    return true
  }
  else{
    return false
  }
  
}
let result = onlyOne(false,false,true)
console.log(result)