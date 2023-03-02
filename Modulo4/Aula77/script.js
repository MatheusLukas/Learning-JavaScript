// Função Construtora
function Pessoa(nome, sobrenome) {
  const ID = 123456;
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": Sou um método");
  };
}

const pessoa1 = new Pessoa("Matheus", "Machado");

console.log(pessoa1.nome);
