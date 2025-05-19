const temperaturasEmCelsius = [0, 10, 20, 30, 40]
let temperaturasEmFahrenheit = [];

// Varredura do array de notas com laço de repetição
for (let i = 0; i < temperaturasEmCelsius.length; i++) {
    temperaturasEmFahrenheit[i] = temperaturasEmCelsius[i] * 9/5 + 32 
}

console.table(temperaturasEmFahrenheit)