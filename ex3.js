// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

// function isPrime2(value) {
//   if (value > 0) {
//     for (let divisor = 2; divisor < value; divisor++) {
//       console.log(divisor);
//       if (value % divisor == 0) {
//         return document.write("nao e primo");
//       } else {
//         return document.write("primo");
//       }
//     }
//   }
// }

// isPrime2(parseInt(prompt("digite um valor")));

let num = Number.parseInt(prompt('digite o número: '))
function isPrime(){
    for(let i = 2; i <num; i++)
if(num % i === 0) {
    return false
};
return num > 1;
}

document.write(isPrime(num) ? 'é primo': 'não é primo')