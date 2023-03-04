const products = { name: "Caneca", price: 1.8 };
// const outroObjeto = { ...products, material: "Vidro" };

// Outro metodo de fazer isso é com Assign

const outroObjeto = Object.assign({}, products, {
  material: "Vidro",
});

outroObjeto.name = "Prato";
outroObjeto.price = 2.5;
// console.log(products);
// console.log(outroObjeto);
console.log(Object.getOwnPropertyDescriptor(products, "name"));

// Mostra as chaves de um Objeto
// console.log(Object.keys(products));
// Mostra o Valor de um Objeto
// console.log(Object.values(products));
console.log(Object.entries(products));
//Object.freeze(products) -> não deixa o objeto ser alterado
