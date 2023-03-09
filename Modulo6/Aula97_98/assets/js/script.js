const formulario = document.querySelector("#form");
const result = document.querySelector("#result");
let cpf;
let cpfClean;
let resultCpfSlice;
let firstNumberCpf = 0;
let secondNumberCpf = 0;

// Função geral
function sendForm(e) {
  let count = 11;
  let sumResult = 0;
  e.preventDefault();
  function getCpf() {
    cpf = document.querySelector("#cpf").value;
    console.log(cpf);
    cpfClean = cpf.replace(/\D+/g, "");
    resultCpfSlice = cpfClean.slice(0, -2);
  }
  // Funçaõ de checar o Numero
  function checkFirstNumberCpf() {
    // For que faz a conta dos digitos do cpf
    for (i of resultCpfSlice) {
      count--;
      console.log(`i: ${i}`);
      console.log(`count: ${count}`);
      //   console.log(`cpf: ${cpfClean}`);
      let resultCpfValue = i * count;
      sumResult += resultCpfValue;
      console.log(`result: ${sumResult}`);
    }
    // Verificar se o numero é maior do que 9
    if ((firstNumberCpf = 11 - (sumResult % 11) > 9)) {
      firstNumberCpf = 0;
    } else firstNumberCpf = 11 - (sumResult % 11);
    // Comparação do primeiro digito do cpf
    if (firstNumberCpf === Number(cpfClean.slice(-2, -1))) {
      console.log(
        `cheguei do jeito certo: numero que eu quero: ${cpfClean.slice(
          -2,
          -1
        )}, oque veio: ${firstNumberCpf}`
      );
      console.log("Estou na segunda etapa");
      sumResult = 0;
      count = 12;
      resultCpfSlice = resultCpfSlice.slice(-1);
      // for que faz a conta dos digitos do cpf
      for (i of resultCpfSlice) {
        count--;
        console.log(`i: ${i}`);
        console.log(`count: ${count}`);
        let resultCpfValue = i * count;
        sumResult += resultCpfValue;
        console.log(`result: ${sumResult}`);
      }
      // Verifica se é maior que 9
      if ((secondNumberCpf = 11 - (sumResult % 11) > 9)) {
        secondNumberCpf = 0;
        console.log("oi");
      }
      // Else
      else {
        result.innerHTML = "Seu CPF é inválido";

        console.log(typeof secondNumberCpf, typeof Number(cpfClean.slice(-1)));
        console.log(
          `cheguei do jeito errado2: numero que eu quero: ${cpfClean.slice(
            -1
          )}, oque veio: ${secondNumberCpf}`
        );
      }

      if (secondNumberCpf === Number(cpf.clean.slice(-1))) {
        console.log("deu bom mano");
      }
    } // else do primeiro digito
    else {
      result.innerHTML = "Seu CPF é inválido";

      //
      //   console.log(
      //     `cheguei do jeito errado: numero que eu quero: ${firstNumberCpf}, oque veio: ${cpfClean.slice(
      //       -2,
      //       -1
      //     )}`
      //   );
    }
  }

  getCpf();
  checkFirstNumberCpf();
}

formulario.addEventListener("submit", sendForm);
