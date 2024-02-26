/*
- [ x]  A soma dos dois números;
- [ x]  A subtração dos dois números;
- [ x]  A multiplicação dos dois números;
- [ x]  A divisão dos dois números;
- [ x]  O resto da divisão dos dois números;

- [ x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let firstNumber = prompt("Type the first number:");
let secondNumber = prompt("Type the second number:");

let convertedFirst = Number(firstNumber);
let convertedSecond = Number(secondNumber);

if (convertedFirst === convertedSecond) {
  alert("Nice, both numbers are equal.");
}

let sumResult = convertedFirst + convertedSecond;
let subResult = convertedFirst - convertedSecond;
let multiplicationResult = convertedFirst * convertedSecond;
let divisionResult = convertedFirst / convertedSecond;
let remainderResult = convertedFirst % convertedSecond;

let counter = 0;

while (counter < 5) {
  switch (counter) {
    case 0:
      const sumRemainder = sumResult % 2;
      if (sumRemainder != 0) {
        alert(`Sum result: ${sumResult} an odd number.`);
      } else alert(`Sum result: ${sumResult} an even number.`);
      break;
    case 1:
      alert(`Subtraction result: ${subResult}`);
      break;
    case 2:
      alert(`Multiplication result: ${multiplicationResult}`);
      break;
    case 3:
      alert(`Division result: ${Math.round(divisionResult)}`);
      break;
    case 4:
      alert(`Remainder result: ${remainderResult}`);
      break;
  }
  counter++;
}
