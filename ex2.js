// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

function imparPar(value) {
    if (value % 2 == 0) {
        document.write("é par")
    } else {
        document.write("é impar")
    }
}

imparPar(parseInt(prompt("digite um valor")))