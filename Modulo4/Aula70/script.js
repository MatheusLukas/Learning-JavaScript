function createMultiplier(multiplier) {
  // Multiplicador
  return function (number) {
    return number * multiplier;
  };
}
const duplica = createMultiplier(2);
const triplica = createMultiplier(3);
const quadriplica = createMultiplier(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(1.2));
