 const dados = {
nome: "Matheus",
sobrenome: "Machado"
}

console.log(dados.nome); 


function criaPessoa (nome, sobrenome, idade) {
 return {
    nome: nome,
    sobrenome: sobrenome, 
    idade: idade,

    fala () {
    console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    },

    incrementaIdade () {
    console.log(`${this.nome} está dizendo que ano que vem fará ${++this.idade}`);}

}
}

const pessoa1 = criaPessoa("Matheuss", "Lukas", "18")
console.log(pessoa1.nome);

pessoa1.fala();
pessoa1.incrementaIdade();