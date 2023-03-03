const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const duplicaNumeros = numeros.map((numeros) => numeros * 2);
console.log(duplicaNumeros);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const retornaNome = pessoas.map((pessoas) => pessoas.nome);
const retornaIdadeObj = pessoas.map((pessoas) => {
  delete pessoas.nome;
  return pessoas;
});
const addIndice = pessoas.map((pessoas, indice) => {
  const newObj = { ...pessoas };
  newObj.id = indice;
  return newObj;
});

console.log(retornaNome);
console.log(retornaIdadeObj);
console.log(addIndice);
