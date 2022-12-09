// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

function perfeito(value) {
    let soma = 0;
    let metade = value / 2;

    for (let i = 1; i <= metade; i++) {
        if (value % i == 0) {
            soma = soma + i;
        }
    }
    if (soma == value) {
        console.log("perfeito");
    } else {
        console.log("Não perfeito");
    }
}
perfeito(parseInt(prompt("Digite um numero")));