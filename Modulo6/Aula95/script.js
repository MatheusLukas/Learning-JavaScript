function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (amount) {
  this.price += amount;
};
Product.prototype.descount = function (amount) {
  this.price -= amount;
};

function Camiseta(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Camiseta.prototype = Object.create(Product.prototype);

const camiseta = new Camiseta("Regata", 7.5, "Preta");
console.log(camiseta);
