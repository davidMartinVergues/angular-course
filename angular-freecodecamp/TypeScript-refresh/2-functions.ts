// diferentes modos de definir una function

// 1. Name function (usando function keyword)

function add(a: number, b: number): number {

    return a + b

}

// no devuelve nada usando void

function add2(a: number, b: number): void {

    console.log(a + b);

}

add2(1, 1)

// 2. Function expression (usando const + función anónima)

const mult = function (a: number, b: number): number {
    return a * b
};


// 3. Arrow function (using "=>")
const sub = (a: number, b: number): number => a - b;




console.log(sub(10, 5));


// PARÁMETROS OPCIONALES EN UNA FUNCIÓN USANDO "?"

function add3(a: number, b: number, c?: number): number {

    return c ? a + b + c : a + b // si c existe suma a + b + c

};

// DEFAULT VALUE

function add4(a: number, b: number, c: number = 10): number {

    return a + b + c  // si le pasamos c coge el valor sino pilla el 10 oir defecto

};


// 4. REST PARAMETERS

function add5(...numbers: number[]): number {

    return numbers.reduce((a, b) => a + b, 0);  // si le pasamos c coge el valor sino pilla el 10 oir defecto

};

add5(1, 2, 3, 4)

// generic functios

// permite crear una función q acepte cualquier tipo de dato.


function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items)
}

let x = getItems<number>([1, 2, 3, 4]);

