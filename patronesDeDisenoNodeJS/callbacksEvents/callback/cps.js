function add(num1, num2) {
    return num1 + num2;
}

function addCPS(num1, num2, callback) {
    callback(num1 + num2);
}

console.log('empieza la ejecución');

addCPS(3, 5, (result) => console.log(`Resultado: ${result}`));

console.log('termina la ejecución');

function addCPSAsync(num1, num2, callback) {
    setTimeout(() => callback(num1 + num2), 100);
}

console.log('empieza la ejecución async');

addCPSAsync(3, 5, (result) => console.log(`Resultado: ${result}`));

console.log('termina la ejecución async');