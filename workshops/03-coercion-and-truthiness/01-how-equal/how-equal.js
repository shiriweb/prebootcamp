// YOUR CODE BELOW
function howEqual(num1, num2){
    if(num1 === num2){
        return "strictly"
    } else if(num1 == num2){
        return "loosely"
    }else{
        return "not equal"
    }
}
let result = howEqual(5, 5);
console.log(result);
