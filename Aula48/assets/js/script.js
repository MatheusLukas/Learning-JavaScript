// function zeroRight(num) {
//   return num < 10 ? `0${num}` : num;
// }

const data = new Date();
// const day = data.getDay();
// const month = data.getMonth() + 1;
// const year = data.getFullYear();
// const hour = zeroRight(data.getHours());
// const minute = zeroRight(data.getMinutes());
// let dayText;
// let monthText;

const result = document.querySelector("#result");

// switch (day) {
//   case 0:
//     dayText = "Domingo";
//     break;
//   case 1:
//     dayText = "Segunda-feira";
//     break;
//   case 2:
//     dayText = "Terça-feira";
//     break;
//   case 3:
//     dayText = "Quarta-feira";
//     break;
//   case 4:
//     dayText = "Quinta-feira";
//     break;
//   case 5:
//     dayText = "Sexta-feira";
//     break;
//   case 6:
//     dayText = "Sabado";
//     break;
//   default:
//     dayText = "";
// }

// switch (month) {
//   case 1:
//     monthText = "Janeiro";
//     break;
//   case 2:
//     monthText = "Fevereiro";
//     break;
//   case 3:
//     monthText = "Março";
//     break;
//   case 4:
//     monthText = "Abril";
//     break;
//   case 5:
//     monthText = "Maio";
//     break;
//   case 6:
//     monthText = "Junho";
//     break;
//   case 7:
//     monthText = "Julho";
//     break;
//   case 8:
//     monthText = "Agosto";
//     break;
//   case 9:
//     monthText = "Setembro";
//     break;
//   case 10:
//     monthText = "Outubro";
//     break;
//   case 11:
//     monthText = "Novembro";
//     break;
//   case 12:
//     monthText = "Dezembro";
//     break;
//   default:
//     monthText = "";
// }

// result.innerHTML = `<p>${dayText}, ${day} de ${monthText} de ${year}
// Horário: ${hour}:${minute}
// </p>`;

// console.log(
//   `data:${data} dia:${day} mes:${month} hora:${hour} minuto:${minute} ano:${year}`
// );

// OUTRO MODO DE FAZER

result.innerHTML = data.toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});
