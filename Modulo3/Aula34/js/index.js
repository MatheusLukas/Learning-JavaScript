function meuEscopo() {
    const formulario = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    

    function recebeEventoForm (e) {
    e.preventDefault();
    const nome =  formulario.querySelector('.nome').value
    const sobrenome =  formulario.querySelector('.sobrenome').value
    const peso =  formulario.querySelector('.peso').value
    const idade =  formulario.querySelector('.idade').value

    pessoas.push({
    nome: nome,
    sobrenome: sobrenome,
    peso: peso,
    idade: idade
    })
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome} ${sobrenome}</p>` + 
    `<p>${peso}  ${idade}</p>`;
    }

    formulario.addEventListener('submit', recebeEventoForm)
    
}

meuEscopo(); 

// tenho que pensar em um jeito de colocar as infos em um objeto e colocar esse objeto em um array
// o objeto tem que incrementar dados de diversas pessoas