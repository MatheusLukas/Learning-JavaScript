// Sobre funções de callback

function random(min = 1000, max = 3000) {
  const numberRandom = Math.random() * (min - max) + min;
  return Math.floor(numberRandom);
}

function sayF1(callback) {
  setTimeout(function () {
    console.log("F1");
    if (callback) callback();
  }, random());
}

function sayF2(callback) {
  setTimeout(function () {
    console.log("F2");
    if (callback) callback();
  }, random());
}

function sayF3(callback) {
  setTimeout(function () {
    console.log("F3");
    if (callback) callback();
  }, random());
}

// Um jeito melhor de realizar a função de baixo

sayF1(sayF1Callback);

function sayF1Callback() {
  sayF2(sayF2Callback);
}

function sayF2Callback() {
  sayF3(sayF3Callback);
}

function sayF3Callback() {
  console.log("Ola mundo");
}

// Um método de callback

// sayF1(function () {
//   sayF2(function () {
//     sayF3(function () {
//       console.log("Olá Mundo");
//     });
//   });
// });

// Eles saem de ordem assim

// sayF1();
// sayF2();
// sayF3();

// console.log("Ola Mundo");
