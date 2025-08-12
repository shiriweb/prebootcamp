// YOUR CODE BELOW
let specialPets = [{
    name: 'Lucky',
    species: 'cat'
  }, {
    name: 'Brownie',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];
function whosASpecial(specialPets) {
  let result ="";
  specialPets.forEach(function(pet, index) {
    result +=`${pet.name} the ${pet.species} is very special!`
    if (index<specialPets.length-1) {
      result +=" ";
    }
  });
  return result;
}