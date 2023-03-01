//Factory function
function createPerson(name, lastname, height, weight) {
  return {
    name,
    lastname,
    get fullName() {
      return `${this.name} ${this.lastname}`;
    },
    set fullName(value) {
      console.log("salve");
      return (value = value.split(" "));
      console.log(`salve dois`, value);
    },
    say: (subject) => {
      return `${name} ${lastname} está dizendo ${subject}`;
    },
    height,
    weight,
    get imc() {
      const indice = this.weight / this.height ** 2;
      return indice.toFixed(2);
    },
  };
}

const person1 = createPerson("Matheus", "Machado", 1.75, 82);

console.log(person1.say("Olá"));
console.log(person1.imc);
person1.name = "Matheus de Lukas";
console.log(person1.fullName);
