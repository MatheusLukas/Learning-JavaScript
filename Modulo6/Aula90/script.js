//defineProperty - defineProperties
function Product(name, price, stock) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostra a chave
    value: stock, // Valor
    writable: false, // Se pode alterar o valor
    configurable: false, // Se pode reconfigurar a chave
  });
  Object.defineProperties(this, {
    name: {
      enumerable: true, //Mostra a chave
      value: name, // Valor
      writable: true, // Se pode alterar o valor
      configurable: true, // Se pode reconfigurar a chave
    },
    price: {
      enumerable: true, //Mostra a chave
      value: price, // Valor
      writable: true, // Se pode alterar o valor
      configurable: true, // Se pode reconfigurar a chave
    },
  });
}

const product1 = new Product("Camiseta", 20, 3);
console.log(product1.name);
console.log(Object.keys(product1));
