
//Get and convert it to a Number (propmpt always return a String)
var age = Number(prompt("What is your age?"));

//If age is negative
if (age < 0 ){
  console.log("come back once you're out of the womb");
  }


//if age is 21
if(age === 21) {
  console.log("Happy 21st Birthday");
}

//if age is odd
//(not evently divisible by two)
if(age % 2 !== 0) {
  console.log("Your age is odd!");
}

//if age is a perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square");

}
