//RESUELVE LOS EJERCICIOS AQUÍ

//          ### Destructuring arrays ###

// 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados[1];
console.log(ana);

// 2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com

const emailLuis = empleados[0].email;
console.log(emailLuis);

// 3.- Usa destructuración para cambiar los valores de a y b;

// ```
// // Inicialmente
// let a = 5;
// let b = 3;

// // Al final
// let a = 3;
// let b = 5;
// ```

let a = 5;
let b = 3;

[a, b] = [3, 5];
// console.log(a);
// console.log(b);

// 4.- Dado el objeto **HIGH_TEMPERATURES**
// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;

// console.log(maximaHoy);
// console.log(maximaManana);



//          ### Spread/Rest ###

// 5.- Escribe una función llamada **sumEveryOther** que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...rest){
   let total = 0;

   for (let i = 0; i < rest.length; i++) {
    total += rest[i];
   }
   return total;
}

// console.log(sumEveryOther(6, 8, 2, 3, 1));
// console.log(sumEveryOther(11, 3, 12));

//6.- Escribe una función llamada **addOnlyNums** que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).

function addOnlyNums(...elementos){
    let suma = 0;
    for (let i = 0; i < elementos.length; i++) {
    if(typeof elementos[i] === "number") {
        suma += elementos[i]
    }}
    return suma
}

console.log(addOnlyNums(1, "perro", 2, 4)); 

//7.- Escribe una función llamada **countTheArgs** que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

let countTheArgs = (...elements) => elements.length;

console.log(countTheArgs("gato", "perro")); 
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

// 8.- Escribe una función llamada **combineTwoArrays** que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

let combineTwoArrays = (array1,array2) => [...array1, ...array2]; 

console.log(combineTwoArrays ( [1,2,3,4], [6,9,7,8]) )

// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

let onlyUniques = (...args) => [...new Set(args)];
console.log(onlyUniques(1,1,1,2,4,5,7,8,8,4,5,9));

// 10.- Escriba una función llamada **combineAllArrays** que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

let combineAllArrays = (...arr) => arr.reduce((a, b) => [...a, ...b] )

console.log(combineAllArrays ( [1,2,'queso',4], [6,'perro',7,8]) )


// 11.- Escriba una función llamada **sumAndSquare** que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

let sumAndSquare = (...arr) => arr.reduce((acc , actual) => acc + actual ** 2, 0);
console.log(sumAndSquare(1,2,3,4,5,6))
console.log(sumAndSquare(2,6))