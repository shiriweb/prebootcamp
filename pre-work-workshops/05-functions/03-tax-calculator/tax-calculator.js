// YOUR CODE BELOW
function taxCalculator(price, state){
    let taxRate
if(state === "NY"){
    taxRate = 0.04;
}else if(state ==="NJ"){
    taxRate = 0.06625;
}else{
    taxRate = 0;
}
return price * taxRate + price;
}
let result = taxCalculator(100, "NJ");
console.log(result);
