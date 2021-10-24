function mainFunction(callback) {
  const numb1 = prompt(`Enter the first number, please:`);
  const numb2 = prompt(`Enter the second number, please:`);
  if (numb1 === null || isNaN(+numb1) || numb1.trim() === "") {
    return `First number is not valid`;
  }
  if (numb2 === null || isNaN(+numb2) || numb2.trim() === "") {
    return `Second number is not valid`;
  }
  return callback(numb1, numb2);
}

function exponentiation(firstNumb, secondNumb) {
  const resultExponent = Math.pow(firstNumb, secondNumb);
  return resultExponent;
}

alert(mainFunction(exponentiation));
// alert(mainFunction(multiply));
// alert(mainFunction(division));
// alert(mainFunction(modulo));

/* Additional tasks below */

function multiply(firstNumb, secondNumb) {
  const resultMultiply = firstNumb * secondNumb;
  return resultMultiply;
}

function division(firstNumb, secondNumb) {
  const resultDivision = firstNumb / secondNumb;
  return resultDivision;
}

function modulo(firstNumb, secondNumb) {
  const resultModulo = firstNumb % secondNumb;
  return resultModulo;
}
