const addMeMaybe =  (number, theFunction)=>{
    number += 1;
  theFunction(number);
};
module.exports = {
    addMeMaybe: addMeMaybe

  };