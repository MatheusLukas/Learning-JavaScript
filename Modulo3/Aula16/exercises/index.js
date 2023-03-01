const name = "Matheus";
const lastName = "Machado";
const age = 20;
const height = 1.95;
const weight = 90;
let date = new Date();
let year = date.getFullYear();
let imc = weight / (height * height);
let anoNascimento = year - age;

if (age >= 18) {
  console.log(
    name +
      lastName +
      "tem" +
      age +
      "anos, sua altura e seu peso são respectivamente:" +
      height +
      "," +
      weight +
      "a partir disto, seu imc é de:" +
      imc.toFixed(1) +
      "e nasceu no ano de:" +
      anoNascimento
  );
} else console.log("Menor de idade!");
