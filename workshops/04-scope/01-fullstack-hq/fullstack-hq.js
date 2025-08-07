// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(first) {
    return innerFunction('New York State');

    function innerFunction(second) {
      let third = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + place + ', ' + first + ', ' + second + ', ' + third;
      }
    }
  }
}
let result = fullstackHQ();
console.log(result);