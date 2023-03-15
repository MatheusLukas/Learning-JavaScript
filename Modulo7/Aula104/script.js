class DispositivoEletronicos {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + "já ligado");
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + "já desligado");
      return;
    }
    this.ligado = false;
  }
}

// const dispositivo1 = new DispositivoEletronicos("Smartphone");
// dispositivo1.ligar();
// dispositivo1.ligar();
// console.log(dispositivo1);

class Smartphone extends DispositivoEletronicos {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}
const dispositivo2 = new Smartphone("Iphone", "Preto");
dispositivo2.ligar();
console.log(dispositivo2);
