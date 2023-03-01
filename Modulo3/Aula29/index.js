const alunos = ["João", "Maria", "Luiz"];

alunos.unshift("Luiza"); // Adiciona no começo
alunos.push("Matheus", "Fatima"); // Adiciona no fim

delete alunos[2];
const removidoFim = alunos.pop(); // remove e armazena o ultimo item do array
const removidoComeco = alunos.shift(); // remove e armazena o primeiro item do array

console.log(alunos);
console.log(alunos[1]);
console.log(alunos.slice(0, 3)); //

console.log(typeof alunos); // Array retorna um Object
console.log(alunos instanceof Array); // Indetificar se é um Array
