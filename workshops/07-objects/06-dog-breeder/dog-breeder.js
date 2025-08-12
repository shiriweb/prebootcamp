// YOUR CODE BELOW
function dogBreeder(name,age){
if(age===undefined){
  if(typeof name==='number'){
    age= name
    name= null
  }else{
    age =0
  }
}
  if(!name){
    name="Steve"
  }
  let newDog={
    name:name,
    age:age
  }
  return newDog
}