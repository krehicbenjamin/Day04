function main(numOne, numTwo) {
  var quotient;

  if (numTwo === 0) {
    quotient = "Devide by 0! Cannot devide by zero!";
  } else {
    //Only change code below this line

    quotient = numOne / numTwo;

    //Only change code above this line
  }
  return quotient;
}

console.log(main(numOne, numTwo));

module.exports = main;
