"use strict";
// classes typescript
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee2_id;
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
        // properties
        // private properties use #
        _Employee2_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
        this.name = name;
        this.address = address;
        Employee2.count += 1;
    }
    // creating methods inside classses
    getNameWithaddress() {
        return `${this.name} ${this.address}`;
    }
    // static properties, metodos o variables, q son propias de la clase.
    // solo se puede acceder desde la clase
    static getEmployeeCount() {
        return Employee2.count;
    }
    // getters and setters
    get empId() {
        return __classPrivateFieldGet(this, _Employee2_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee2_id, id, "f");
    }
}
_Employee2_id = new WeakMap();
class Manager extends Employee2 {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let emp2 = new Employee2(2, 'dav', 'a');
let manager = new Manager(2, 'dav', 'a');
// getters and setters
emp2.empId = 200;
console.log(emp2.empId);
