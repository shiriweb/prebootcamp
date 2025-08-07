// YOUR CODE BELOW
function taxCalculator(price, state){
  if(state == "NY"){
    price = price + price * 0.04;
  }
  else if(state == "NJ"){
    price = price + price * 0.06625;
  }
  return price;
}
