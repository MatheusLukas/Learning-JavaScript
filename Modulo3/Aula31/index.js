// function sum(firstnumber, secondnumber) {
//   console.log(firstnumber + secondnumber);
// }


// Função Calorias Masculinas

function calorias (peso, altura, idade) {
  

 const totalCalorias = (66+(13.7*peso)+(5*altura)-(6.8*idade));
 return totalCalorias;

}

const gastoCalorico = calorias(70, 173, 17)
console.log(gastoCalorico);


// Função Calorias Femininas


function caloria (peso, altura, idade) {
const totalCalorias = 665+(9.6*peso)+(1.8*altura)-(4.7*idade)
return totalCalorias
}

const resultado = caloria(78, 171, 47)
console.log(resultado);


const raiz = function(numero) {
return numero ** 0.5
}

console.log(raiz(5));