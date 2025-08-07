// YOUR CODE BELOW
function myOr(a,b,c){
    return a || b || c;
}
function myAnd(a,b,c){
    return a && b && c;
}
let result1 = myOr(false, "true", true);
console.log(result1);

let result2 = myAnd(true, "true", true);
console.log(result2);