// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const prompt = require('prompt-sync')();

function naSequenciaDeFibonacci(n) {
    let sequenciaFib = [0, 1];

    while (sequenciaFib[sequenciaFib.length - 1] < n) {
        let proximoValor = sequenciaFib[sequenciaFib.length - 1] + sequenciaFib[sequenciaFib.length - 2];
        sequenciaFib.push(proximoValor);
    }

    if (sequenciaFib.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci. A sequência é ${sequenciaFib}`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

// Exemplo
let numeroInformado = parseInt(prompt("Informe um número: "));
let resultado = naSequenciaDeFibonacci(numeroInformado);
console.log(resultado);