/*

1. Type inference and Type sefty


En JS nosotros podemos hacer:

let fname  = 'David';


fname = 100;

Esto es algo q con TS vamos a evitar.


*/

// inference typing

let lname = "Jonh";

// lname = 100; // esto da error xq ya lo inicializamos como string y le estamos asignando un number

// declaring variable type

/*
******************************
************* STRINGS ********
******************************
*/



let nombre: string;

nombre = "David"

let new_nombre = nombre.toLocaleUpperCase()

console.log(new_nombre);


/*
******************************
************* NUMBERS ********
******************************
*/

let age: number = 20;

age = 20.5;

let result = parseInt("25")

/*
******************************
************* BOOLEANS ********
******************************
*/


let isValid: boolean = false; // siempre inicializar la variable

console.log(isValid);


/*
******************************
************* ARRAY ********
******************************
*/

let empList: string[];
// usando generics
let empList_gen: Array<string>;

empList = ["Dav", "MJ"]


let numList: number[];

numList = [1, 2, 3, 4, 5, 6]

// ARRAY FUNCTIONS
//FILTER
let r = numList.filter((num) => num > 3)
console.log(r);

// FIND, devuelve el valor si lo encuentra si no undefined
let r2 = numList.find((num) => num === -3)
console.log(r2);

//reduce, es un acumulador

let sum = numList.reduce((acc, num) => acc + num);

console.log(sum);

// ENUM
// los enums están indexados así podemos acceder a sus valores por posición

const enum Color {
    Red,
    Green,
    Blue
}

let tag_blue: Color = Color.Blue;

// TUPLES

// pueden mezclar varios tipos de datos y tendrán una dimensión finita, según la marquemos nosotros y el editor nos indicará un error si queremos acceder a un índice q no existe

let myTyple: [firstNumber: number, secondNumber: number, thirdData: Color];


function swapNumbers(num1: number, num2: number): [number, number, Color] {
    return [num2, num1, Color.Blue]
}

myTyple = swapNumbers(10, 20);

console.log(myTyple[2]);

// ANY, permite asignar a una variable q podrá aceptar cualquier tipo de dato

let myV: any;

myV = 'Hi'

myV = 100; // no error 

// functions


