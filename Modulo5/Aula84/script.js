const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosMaiorDez = numeros.filter((numeros) => numeros < 10);

// console.log(numerosMaiorDez);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomeMaiorQueCincoLetras = pessoas.filter(
  (pessoas) => pessoas.nome.length >= 5
);
// console.log(nomeMaiorQueCincoLetras);

const idadeMaiorQue50 = pessoas.filter((pessoas) => pessoas.idade > 50);

// console.log(idadeMaiorQue50);

const nomeTerminaComA = pessoas.filter((pessoas) =>
  pessoas.nome.toLowerCase().endsWith("a")
);

console.log(nomeTerminaComA);
