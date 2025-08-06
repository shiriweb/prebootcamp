// YOUR CODE BELOW
function bacteriaTime(currentNum,targetNum){
if(currentNum>targetNum){
    return 'targetNum must be larger than currentNum';
}
let minutes= 0;
while(currentNum < targetNum){
    currentNum = currentNum * 2;
    minutes = minutes + 20;
}
return minutes;
}
let finalResult = bacteriaTime(1, 9);
console.log(finalResult);

