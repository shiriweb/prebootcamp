// YOUR CODE BELOW
function exponentiate(base, power) {
  if (power === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base;    
  }
  return result;
}

let finalResult = exponentiate(2, 3);
console.log(finalResult);

