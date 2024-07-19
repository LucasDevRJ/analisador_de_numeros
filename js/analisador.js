var numerosAdicionados = [];
var resultado = document.getElementById("resultado");

function adicionaNumero() {
    let campoNumero = document.getElementById("numero");
    let numeroDigitado = campoNumero.value;
    let numeros = document.getElementById("numeros");
    if (numeroDigitado.length > 0) {
        numeroDigitado = parseInt(numeroDigitado);
        if (numeroDigitado > 0 && numeroDigitado < 100) {
            if (!numerosAdicionados.includes(numeroDigitado)) {
                numerosAdicionados.push(numeroDigitado);
                numeros.innerHTML += `O valor ${numeroDigitado} foi adicionado!\n`;
                resultado.innerHTML = "";
            } else {
                resultado.innerHTML = "Número já adicionado!";
            }
        } else {
            resultado.innerHTML = "Digite algum número entre 1 e 100!";
        }
    } else {
        resultado.innerHTML = "Digite algum número!";
    }
    campoNumero.value = "";
}

var botao = document.getElementById("botao");
botao.addEventListener("click", adicionaNumero);