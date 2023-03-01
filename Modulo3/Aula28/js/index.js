const numero = Number(prompt("Digite um numero"));
const mostraNumero = document.getElementById("numero_titulo");
const texto = document.getElementById("texto");

mostraNumero.innerHTML = numero;
texto.innerHTML = `<p>A raiz quadrada do numero ${numero} é: ${
  numero ** 0.5
}</p>`;
texto.innerHTML += `<p>O numero ${numero} é inteiro? ${Number.isInteger(
  numero
)}</p>`;
texto.innerHTML += `<p>É NaN? ${isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas Decimais: ${numero.toFixed(2)}</p>`;
