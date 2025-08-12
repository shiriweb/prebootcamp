// YOUR CODE BELOW
function deeperCopy(array){
  let copyArray=[]
  for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i])){
      let nestedArray=[]
      for(let j=0;j<array[i].length;j++){
        let element= array[i][j]
        nestedArray.push(element)
      }
      copyArray.push(nestedArray)
    }else{
      copyArray.push(array[i])
    }
  }
  return copyArray
}