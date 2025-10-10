const mensaje = `Hola mundo desde script.js`;
console.log(mensaje.length);
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase());
console.log(mensaje.includes('mundo'));
console.log(mensaje.replace('mundo', 'programador'));
console.log(mensaje.charAt(0));

const numeroPar = 42;

console.log(numeroPar);

console.log(typeof numeroPar);

let otroMensaje = 'Hola de nuevo';
console.log(otroMensaje);

otroMensaje = 'Adiós';
console.log(otroMensaje);

const nombre = 'Pedro';
const edad = 20;

console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años.');
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

if (edad >= 18) {
    console.log('Soy mayor de edad.');
} else {
    console.log('Soy menor de edad.');
}

if (edad === 20) {
    console.log('Tengo 20 años.');
}

for (let i = 0; i < mensaje.length; i++) {
    console.log(`Numero ${i}`);
}

for (const char of mensaje) {
    console.log(char);
}

const array = [1, 2, 3, 4, 5];
console.log(array);

array.push(6);
console.log(array);

function saludar() {
    console.log('Hola a todos!');
}

saludar();

const despedida = () => {
    console.log('Adiós a todos!');
}

despedida();

const name = document.querySelector('.name');

name.textContent = 'Pedro Izquierdo /';

const sumar = (a, b) => {
    return console.log(a + b);
}

const sumar2 = (a, b) => a + b;

sumar(5, 10);
sumar2(20, 30);

const IsIsogram = (word) => {  

    const letters= [];
    
    for (const letter of word) {
        if (letters.includes(letter)) {
            console.log(`${word} no es un isograma`);     
            return false;
        }
        letters.push(letter);
    }
    console.log(`${word} es un isograma`);
    return true;    

}

IsIsogram('Kermato');
IsIsogram('Clamato');

const IsAnagram = (word1, word2) => {

    const sortWord1 = word1.toLowerCase().split('').sort().join('');
    const sortWord2 = word2.toLowerCase().split('').sort().join('');

    if (sortWord1 === sortWord2) {
        console.log(`${word1} y ${word2} son anagramas`);
        return true;
    } else {
        console.log(`${word1} y ${word2} no son anagramas`);
        return false;
    }
    
}

IsAnagram('roma', 'amor');
IsAnagram('roma', 'carro');