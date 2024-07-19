var numerosAdicionados = [];

function adicionaNumero() {
    let campoNumero = document.getElementById("numero");
    let numeroDigitado = campoNumero.value;
    let numeros = document.getElementById("numeros");
    if (numeroDigitado.length > 0) {
        if (numeroDigitado > 0 && numeroDigitado < 100) {
            numerosAdicionados.push(numeroDigitado);
            numeros.innerHTML += `${numeroDigitado}\n`;
        } else {
            exibeMensagemErro("Digite algum número entre 1 e 100!");
        }
    } else {
        exibeMensagemErro("Digite algum número!");
    }
}

function exibeMensagemErro(mensagem) {
    let divisaoResultado = document.getElementById("resultado");
    let paragrafoMensagemErro = document.createElement("p");
    let mensagemErro = document.createTextNode(mensagem);
    paragrafoMensagemErro.appendChild(mensagemErro);
    divisaoResultado.appendChild(paragrafoMensagemErro);
}

var botao = document.getElementById("botao");
botao.addEventListener("click", adicionaNumero);