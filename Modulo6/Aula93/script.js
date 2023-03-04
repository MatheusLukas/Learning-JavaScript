//Construtora -> Molde (classe)
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  //   this.nomeCompleto = () => this.name + "" + this.lastname;
}

Person.prototype.fullName = function () {
  return this.name + "" + this.lastname;
};

// instancia

const person1 = new Person("Matheus", "Machado"); // <- Person = Função Construtora
const person2 = new Person("Maria", "A"); // <- Person = Função Construtora
const date = new Date();

console.log(person1);
console.log(person2);
console.log(date);
