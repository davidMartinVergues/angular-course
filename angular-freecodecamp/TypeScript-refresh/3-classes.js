"use strict";
// classes typescript
// con el contructor por defecto, no hace falta especificarlo
// pero entonces nos saldrá un error para evitarlo después del nombre de la property
// debemos añadir un !
class Employee {
}
let emp = new Employee();
emp.id = 1;
emp.name = 'david';
emp.address = 'one';
console.log(emp);
// Employee { id: 1, name: 'david', address: 'one' }
/**
 * si usamos constructores, q son los responsables de crear una instacia
 * de nuestra clase. Hay dos tipos de contructores:
 *
 * 1. contructor por default
 * 2. constructor parametrizado (hecho por nosotros)
 *
 *
 *
 */
// constructor parametrizado
// cuando hagamos el new debemos pasarle los propeties
class Employee2 {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // creating methods inside classses
    getNameWithaddress() {
        return `${this.name} ${this.address}`;
    }
}
let emp2 = new Employee2(2, 'dav', 'a');
console.log(emp2);
