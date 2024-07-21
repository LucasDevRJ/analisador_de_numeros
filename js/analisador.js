var numerosAdicionados = [];
var resultado = document.getElementById("resultado");
var botaoAdicionar = document.getElementById("botaoAdicionar");
var botaoCalcular = document.getElementById("botaoCalcular");
var resultadosExibidos = false;
var valorValido = false;

botaoAdicionar.onclick = function adicionaNumero() {
    if (resultadosExibidos) {
        resultado.innerHTML = "";
    }
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
                valorValido = true;
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

botaoCalcular.onclick = function calcularNumeros() {
    if (numerosAdicionados.length > 1) {
        let quantidadeTotalDeNumeros = numerosAdicionados.length;
        let maiorValorDigitado = numerosAdicionados[0];
        let menorValorDigitado = numerosAdicionados[0];
        let soma = 0;
        let media = 0;
    
        for (const numero in numerosAdicionados) {
            if (maiorValorDigitado < numerosAdicionados[numero]) {
                maiorValorDigitado = numerosAdicionados[numero];
            }
    
            if (menorValorDigitado > numerosAdicionados[numero]) {
                menorValorDigitado = numerosAdicionados[numero];
            }
    
            soma += numerosAdicionados[numero];
        }
    
        media = soma / quantidadeTotalDeNumeros;
    
        resultado.classList.remove("mensagem-erro");
        resultado.innerHTML = `São ${quantidadeTotalDeNumeros} números cadastrados.<br>`;
        resultado.innerHTML += `O maior valor digitado foi ${maiorValorDigitado}.<br>`;
        resultado.innerHTML += `O menor valor digitado foi ${menorValorDigitado}.<br>`;
        resultado.innerHTML += `A soma dos valores é ${soma}.<br>`;
        resultado.innerHTML += `A média dos valores é ${media.toFixed(2)}.`;
        resultadosExibidos = true;
    } else {
        resultado.innerHTML = "Adicione valores!";
    }
}

if (!valorValido) {
    resultado.classList.add('mensagem-erro');
}