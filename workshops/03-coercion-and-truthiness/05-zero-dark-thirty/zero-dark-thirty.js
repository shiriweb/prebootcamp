// YOUR CODE BELOW
function zeroDarkThirty(number){
  if(number === 0){
    return NaN
  }
number = String(number)
  let NewNumber=''
  for(let i=0; i<number.length;i++){
    let character= number[i]
    if(character !== '0'){
      NewNumber +=character
    }
  }
  return Number(NewNumber)
}
