const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let somaDasNotas = 0;
let media = 0;
let notasAcimaDaMedia = 0;
let maiorNota = notas[0]
let menorNota = notas[0];

// Varredura do array de notas com laços de repetição
for (let i = 0; i < notas.length; i++) {
    // Soma das notas
    somaDasNotas += notas[i]
    
};

// Cálculo das médias
media = somaDasNotas / notas.length;

// Varredura do array
for (let i = 0; i < notas.length; i++) {
    // Condicional para notas acima da média
    if (notas[i] > media)
        notasAcimaDaMedia++
};
    
// Varredura do array
for (let i = 1; i < notas.length; i++) {
    // Condicional para maior nota
    if (notas[i] > maiorNota)
        maiorNota = notas[i];
    
    // Condicional para menor nota
    if (notas[i] < menorNota)
        menorNota = notas[i];

};

console.log(`A média das notas da turma é ${media}`);
console.log(`${notasAcimaDaMedia} alunos tiraram nota acima da média.`);
console.log(`A maior nota foi ${maiorNota} e a menor nota foi ${menorNota}.`);
