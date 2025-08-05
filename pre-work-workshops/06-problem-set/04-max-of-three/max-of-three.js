// YOUR CODE BELOW
function maxOfThree(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }
}
let result = maxOfThree(5, 10, 3);
console.log(result);