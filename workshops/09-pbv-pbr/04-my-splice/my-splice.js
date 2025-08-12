// YOUR CODE BELOW
function mySplice(array, startIndex, deletedElement, newElement){
  let removedElement=[]
  let keptElement=[]
  for(let i=0; i<startIndex;i++){
    let value= array[i]
    keptElement.push(value)
  }
  if(newElement!==undefined){
    keptElement.push(newElement)
  }
  for(let i=startIndex;i<startIndex+deletedElement;i++){
    let value=array[i]
    removedElement.push(value)
  }
  for(let i=startIndex+deletedElement; i<array.length;i++){
    let value= array[i]
    keptElement.push(value)
  }
  while(array.length){
    array.pop()
  }
  for(let i=0;i<keptElement.length;i++){
    let element=keptElement[i]
    array.push(element)
  }
  return removedElement
}