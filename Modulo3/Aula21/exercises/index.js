let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const stockVarA = varA;

varA = varB;
varB = varC;
varC = stockVarA;

// [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
