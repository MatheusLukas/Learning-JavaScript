//concatenar arrays

const a1 = [0, 1, 2];
const a2 = [3, 4, 5];

// const a3 = a1.concat(a2, [6, 7, 8]);
const a3 = [...a1, ...a2];

console.log(a3);
