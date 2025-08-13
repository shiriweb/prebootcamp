// YOUR CODE BELOW
function billerBuilder(state){
  if(state==="NY"){
    return newFunction1
  }

  function newFunction1(price){
    price= price *1.03* 1.04
    return price
    }
  function newFunction2(price){
    price= price *1.05*1.06625
    return price  
  }
  return newFunction2
}
