// YOUR CODE BELOW
function reverseArray(array){
  let newArray=[]
  while(array.length){
    let value=array.pop()
    newArray.push(value)
  }
  while(newArray.length){
    let element= newArray.pop()
    array.unshift(element)
 }
  return array
  
}