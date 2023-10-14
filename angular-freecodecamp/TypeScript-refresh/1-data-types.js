"use strict";
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
let nombre;
nombre = "David";
let new_nombre = nombre.toLocaleUpperCase();
console.log(new_nombre);
/*
******************************
************* NUMBERS ********
******************************
*/
let age = 20;
age = 20.5;
let result = parseInt("25");
/*
******************************
************* BOOLEANS ********
******************************
*/
let isValid = false; // siempre inicializar la variable
console.log(isValid);
/*
******************************
************* ARRAY ********
******************************
*/
let empList;
// usando generics
let empList_gen;
empList = ["Dav", "MJ"];
let numList;
numList = [1, 2, 3, 4, 5, 6];
// ARRAY FUNCTIONS
//FILTER
let r = numList.filter((num) => num > 3);
console.log(r);
// FIND, devuelve el valor si lo encuentra si no undefined
let r2 = numList.find((num) => num === -3);
console.log(r2);
//reduce, es un acumulador
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let tag_blue = 2 /* Color.Blue */;
// TUPLES
// pueden mezclar varios tipos de datos y tendrán una dimensión finita, según la marquemos nosotros y el editor nos indicará un error si queremos acceder a un índice q no existe
let myTyple;
function swapNumbers(num1, num2) {
    return [num2, num1, 2 /* Color.Blue */];
}
myTyple = swapNumbers(10, 20);
console.log(myTyple[2]);
// ANY, permite asignar a una variable q podrá aceptar cualquier tipo de dato
let myV;
myV = 'Hi';
myV = 100; // no error 
// functions
