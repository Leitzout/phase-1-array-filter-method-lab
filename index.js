function findMatching (drivers, string) {
   let filteredArray = drivers.filter(name => name === string || name === string.toLowerCase());
   console.log(filteredArray)
   return filteredArray;
}

function fuzzyMatch (drivers, string) {
   const saMatch = drivers.filter(driver => driver.slice(0,string.length) == string)
   return saMatch;
}

function matchName (drivers, string) {
   const findBobby = drivers.filter(driver => driver.name ==="Bobby")
   return findBobby;
}
