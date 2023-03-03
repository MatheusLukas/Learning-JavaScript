const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosParesDobrados = numeros
  .filter((numeros) => numeros % 2 === 0)
  .map((numeros) => numeros * 2)
  .reduce((acumulador, numeros) => acumulador + numeros);

console.log(numerosParesDobrados);
