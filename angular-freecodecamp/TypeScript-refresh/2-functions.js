"use strict";
// diferentes modos de definir una function
// 1. Name function (usando function keyword)
function add(a, b) {
    return a + b;
}
// no devuelve nada usando void
function add2(a, b) {
    console.log(a + b);
}
add2(1, 1);
// 2. Function expression (usando const + función anónima)
const mult = function (a, b) {
    return a * b;
};
// 3. Arrow function (using "=>")
const sub = (a, b) => a - b;
console.log(sub(10, 5));
// PARÁMETROS OPCIONALES EN UNA FUNCIÓN USANDO "?"
function add3(a, b, c) {
    return c ? a + b + c : a + b; // si c existe suma a + b + c
}
;
// DEFAULT VALUE
function add4(a, b, c = 10) {
    return a + b + c; // si le pasamos c coge el valor sino pilla el 10 oir defecto
}
;
// 4. REST PARAMETERS
function add5(...numbers) {
    return numbers.reduce((a, b) => a + b, 0); // si le pasamos c coge el valor sino pilla el 10 oir defecto
}
;
add5(1, 2, 3, 4);
// generic functios
// permite crear una función q acepte cualquier tipo de dato.
function getItems(items) {
    return new Array().concat(items);
}
let x = getItems([1, 2, 3, 4]);
