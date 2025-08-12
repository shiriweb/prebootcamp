// YOUR CODE BELOW
function functionLogger(func, argument){
    console.log("Function starting");
    let result = func(argument)
    console.log("Function conpleted");
    return result
    
    
}
function squareNum(number){
    return number * number;
}