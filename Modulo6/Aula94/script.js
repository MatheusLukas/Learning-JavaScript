// const objetoA = {
//   chaveA: "A",
// };

// const objetoB = {
//   chaveB: "B",
// };

// const objetoC = {
//   chaveC: "C",
// };

// Object.setPrototypeOf(objetoB, objetoA);
// Object.setPrototypeOf(objetoC, objetoB);

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.descount = function (percentual) {
  return (this.price = this.price - this.price * (percentual / 100));
};

Product.prototype.increase = function (percentual) {
  return (this.price = this.price + this.price * (percentual / 100));
};

const product1 = new Product("Camisa", 50);
const product2 = {
  name: "Caneca",
  price: 15,
  material: "Vidro",
};
Object.setPrototypeOf(product2, Product.prototype);
product1.descount(50);
product2.increase(100);
// person1.increase(10);

console.log(product1);
console.log(product2);

const product3 = Object.create(Product.prototype, {
  price: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 43,
  },
});
