const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    callback();
  }
  
  function myCallback() {
    console.log("I am the callback function");
  }
  
  receivesAFunction(myCallback);

  function returnsANamedFunction(){
  return function namedFunction(){
    console.log("This is a named function");
  }
}
  const aDifferentFunction = returnsANamedFunction();
  aDifferentFunction();

 function returnsAnAnonymousFunction(){
  return function(){
    console.log("I think this is making sense");
  }
}
const thisNewFunction = returnsAnAnonymousFunction();

myFunction();