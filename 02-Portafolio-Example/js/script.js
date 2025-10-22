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


//CALLBACKS HELL
// Un callback es una función que se pasa como argumento a otra función
// y se ejecuta dentro de esa función.
const otraFuncion = () => {
    console.log('Función 2 ejecutada');
}

const funcion1 = (otraFuncion) => {
    setTimeout(() => {
        console.log('Función 1 ejecutada');
        otraFuncion();
    }, 5000);
}

console.log(funcion1(otraFuncion));

//EJEMPLO DE CALLBACK HELL
// const hacerPiza = () => {
//     const masa = () => {
//         const hornear = () => {
//             const decorar = () => {
//             }   
//         }
//     }
// }

// Promesas. Las promesas son una forma de manejar operaciones asincrónicas en JavaScript.
// Una promesa representa un valor que puede estar disponible ahora, en el futuro o nunca.

const promesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        resolve('La promesa se cumplió');
    } else {
        reject('La promesa se rechazó');
    }
});

promesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    }); 


const funcionAsincrona = async (promesa) => {
    try {
        const resultado = await promesa;
        console.log(`Resultado: ${resultado}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

funcionAsincrona(promesa);



const body = document.querySelector('body header nav a');
const languageCard = document.querySelector('.language-card');
const sectionId = document.getElementById('languages');

// const body2 = document.getElementsByTagName('body');
// const byid = document.getElementById('byid');
// const byclass = document.getElementsByClassName('byclass');
// const byname = document.getElementsByName('byname');

console.log(body);
console.log(languageCard);
console.log(sectionId);


const buttons = document.querySelectorAll('.language-card button');
const languageCards = document.querySelectorAll('.language-card');
console.log(buttons);

console.log(languageCards);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.id;
    console.log(targetId);

    languageCards.forEach((card) => {
      if (card.dataset.id === targetId) {
        card.classList.toggle('active-card');
      } else {
        card.classList.remove('active-card');
      }
    });
  });
});

// Guardar un texto simple
localStorage.setItem("nombre", "Pedro");

// Leerlo
let nombreGuardado = localStorage.getItem("nombre");
console.log(nombreGuardado);

// Borrar un item
localStorage.removeItem("nombre");

// Borrar todo
localStorage.clear();


let usuario = {
  nombre: "Pedro",
  edad: 20
};

// Convertir objeto a string y guardar
localStorage.setItem("usuario", JSON.stringify(usuario));

// Leerlo y convertir de nuevo a objeto
let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado.nombre); // "Pedro"

// Borrar un item
localStorage.removeItem("usuario");

// Borrar todo
localStorage.clear();