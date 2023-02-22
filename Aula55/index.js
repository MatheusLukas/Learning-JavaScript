const frutas = ["Pera", "Uva", "Maça"];
// const pessoas = {
//   nome: matheus,
//   sobrenome: machado,
//   idade: 18;
// };

//Com For

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//Com for in, for in serve para ler os indices de arrays ou objetos

for (let i in frutas) {
  console.log(frutas[i]);
}

// for in em objetos

// for (let i in pessoas) {
//   const chave = "nome";
//   console.log(pessoas["chave"]);
// }

// for of

const nomes = ["Matheus", "Lukas"];

for (let valor of nomes) {
  console.log(valor);
}

// ForEach

nomes.forEach(function (valor, indices, arrays) {
  console.log(valor, indices, arrays);
});
