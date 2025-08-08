// YOUR CODE BELOW
function myJoin(array,separator){
  if(separator===undefined){
    separator=","
  }
  let newString=""
  for(let i=0;i<array.length;i++){
    let element= array[i]
    if(i!==0){
      newString+=separator
    }
    if(element!== undefined && element!==null){
      newString+=element
    }
  }
  return newString
}