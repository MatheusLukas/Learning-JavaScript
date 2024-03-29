// const _velocidade = Symbol("velocidade");
// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }
//   acelerar() {
//     if (this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }
//   set velocidade(valor) {
//     if (typeof valor !== "number") return;
//     if (valor >= 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   get velocidade() {
//     return this[_velocidade];
//   }
//   freiar() {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const carro1 = new Carro("Fusca");

// for (let i = 0; i <= 200; i++) {
//   carro1.acelerar();
// }

// carro1.velocidade = 90;

// console.log(carro1.velocidade);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa1 = new Pessoa("Matheus", "Lukas");
console.log(pessoa1.nomeCompleto);
