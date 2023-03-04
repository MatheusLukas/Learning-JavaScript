// defineProperty -> Getter e Setters
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostra a chave
    configurable: false, // Se pode reconfigurar a chave
    get: function () {
      return stock;
    },
    set: function (value) {},
  });
}

function createProduct(name) {
  return {
    get name() {
      return name;
    },
    set name(value) {
      name = value;
    },
  };
}

// const product1 = new Product("Camiseta", 20, 3);
// console.log(product1);
// product1.stock = 2;
// console.log(product1.stock);

const product2 = createProduct("Camiseta");
console.log(product2.name);
