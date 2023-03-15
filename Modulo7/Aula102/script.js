class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} esta falando`);
  }
  comer() {
    console.log(`${this.nome} esta falando`);
  }
  beber() {
    console.log(`${this.nome} esta falando`);
  }
}

const pessoa1 = new Pessoa("Matheus", "Machado");
console.log(pessoa1);
