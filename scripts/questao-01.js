const idades = [17, 21, 16, 25, 19];
let maioresDeIdade = 0;
let menoresDeIdade = 0;

// laço de repetição para varrer todos os elementos do meu array idades
for (let i = 0; i < idades.length; i++) {
    // condição para contadores de maior idade
    if (idades[i] >= 18) {
        maioresDeIdade++;
    } else {
        menoresDeIdade++;
    }
} 

//menoresDeIdade = idades.legth - maioresDeIdade;

console.log(`A quantidade de pessoas maiores de idade é: ${maioresDeIdade}`);
console.log(`A quantidade de pessoas menores de idade é: ${menoresDeIdade}`);
