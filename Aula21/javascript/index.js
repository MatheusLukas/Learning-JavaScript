alert("Salve salve");
let nome = prompt("Digite seu nome");
const confirmName = confirm("Seu nome é:" + nome);

if (confirmName === true) {
  const firstnumber = Number(prompt("Digite um numero"));
  const secondnumber = Number(prompt("Digite outro numero"));
  const result = firstnumber + secondnumber;
  alert(result);
} else {
  alert("Ta");
}
