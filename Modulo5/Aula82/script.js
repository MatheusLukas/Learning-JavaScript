const names = ["Matheus", "Maria", "José", "Eduardo", "Gabriel"];

// splice(índice, deleta, elemento1, elemento2, elemento3)

names.splice(4, 1); // deleta o indice 4
names.splice(3, 0, "Machado"); // coloca no indice 3
names.splice(3, 1, "Roberto"); // remove o item do indice 3 e coloca oque foi passado no lugar

console.log(names);
