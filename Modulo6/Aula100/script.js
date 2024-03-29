function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome}, esta falando`);
    },
    comer() {
      console.log(`${this.nome}, esta comendo`);
    },
    beber() {
      console.log(`${this.nome}, esta bebendo`);
    },
  };
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const pessoa1 = criaPessoa("Matheus", "Lukas");
pessoa1.falar();
