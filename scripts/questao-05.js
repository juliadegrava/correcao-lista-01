const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
const precoComDesconto = [];
let contadorArrayPrecosDesconto = 0;
let valorDesconto = 10;
let preco = 0;
let descontoCadaProduto = 0;
let somaTotalPrecos = 0;
let somaTotalPrecosComDesconto = 0;
let perdaDaLoja = 0;
let mediaDescontos = 0;

// Varredura do array com laço de repetição
for (let i = 0; i < precos.length; i++) {
    preco = precos[i]
    if (precos[i] > 100) {
        descontoCadaProduto[i] = precos[i] / 100 * valorDesconto
    preco = precos[i] - descontoCadaProduto;
    }

    precoComDesconto[contadorArrayPrecosDesconto] = preco;
    contadorArrayPrecosDesconto++;

   
    somaTotalPrecos += precos[i];
    somaTotalPrecosComDesconto += precoComDesconto[i];
}

perdaDaLoja = somaTotalPrecos - somaTotalPrecosComDesconto;
mediaDescontos = somaTotalPrecosComDesconto / precoComDesconto.length;

console.table(precos);
console.table(precoComDesconto);
console.log(`A loja vai perder: R$ ${perdaDaLoja.toFixed(2)}`);
console.log(`A média com desconto é: R$ ${mediaDescontos.toFixed(2)}`);
