// YOUR CODE BELOW
let animal = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}
function cloneMachine(parent){
  let clone={
    name: parent.name+"Clone",
    species: parent.species,
    offspring:[]
  }
  parent.offspring.push(clone.name)
  return clone
}