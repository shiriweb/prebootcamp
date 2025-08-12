// YOUR CODE BELOW
function veryOdd(array){
  let oddNumber=[]
  for(let i=0; i<array.length; i++){
    if(array[i]%2===1){
      oddNumber.push(array[i])
    }
  }
  return oddNumber
}



