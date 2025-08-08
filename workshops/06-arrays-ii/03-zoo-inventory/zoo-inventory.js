// YOUR CODE BELOW
function zooInventory(zoo) {
  let newArray = [];
  for (let i = 0; i < zoo.length; i++) {
    let animal = zoo[i];
    let name = animal[0];
    let species = animal[1][0];
    let age = animal[1][1];
    let sentence = `${name} the ${species} is ${age}.`;
    newArray.push(sentence);
  }
  return newArray;
}

