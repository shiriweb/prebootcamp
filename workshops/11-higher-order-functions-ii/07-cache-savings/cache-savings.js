// YOUR CODE BELOW
function add(num) {
  return num +10
}
function cacheSavings(callback){
  let cache={}
  return function(arg){
    if(!(arg in cache)){
      let cacheResult= callback(arg)
      cache[arg]= cacheResult
    }
    return cache[arg]
  }
}