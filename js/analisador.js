var numerosAdicionados = [];

function adicionaNumero() {
    let campoNumero = document.getElementById("numero");
    let numeroDigitado = campoNumero.value;
    let numeros = document.getElementById("numeros");
    console.log(numeros);
    numerosAdicionados.push(numeroDigitado);
    numeros.innerHTML += `${numeroDigitado}\n`;
}

var botao = document.getElementById("botao");
console.log(botao);
botao.addEventListener("click", adicionaNumero);