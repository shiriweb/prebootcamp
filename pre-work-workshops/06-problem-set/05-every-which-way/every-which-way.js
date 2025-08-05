// YOUR CODE BELOW
function everyWhichWay(num1, num2, num3){
    if(num1+num2 === num3){
        return "sum";
    }
    else if(num1-num2 === num3){
        return "difference";
    }
    else if(num1*num2 === num3){
        return "product";
    }
    else if(num1/num2 === num3){
        return "fraction";
    }else{
        return null
    }
}
let result = everyWhichWay(1,2,3)
console.log(result);
