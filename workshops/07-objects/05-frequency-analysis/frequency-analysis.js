// YOUR CODE BELOW
function frequencyAnalysis(string){
  let stringCount={}
  for(let i=0; i<string.length;i++){
    let char= string[i];
    if(!stringCount[char]){
      stringCount[char] =1;
    }else{
      stringCount[char]++;
    }
  }
  return stringCount;
}