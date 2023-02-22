function divisor(number) {
  if (!isNaN(number)) {
    if (number % 3 == 0 && number % 5 != 0) {
      return "Fizz";
    } else if (number % 5 == 0 && number % 3 != 0) {
      return "Buzz";
    } else if (number % 3 == 0 && number % 5 == 0) {
      return "FizzBuzz";
    } else {
      return `O numero: ${number} não é divisiel nem por 3 e nem por 5`;
    }
  } else {
    return "Coloque um Número";
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i, divisor(i));
}
