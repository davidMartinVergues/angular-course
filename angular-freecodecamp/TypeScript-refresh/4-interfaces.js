"use strict";
// creating interface
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
var _Employee3_id, _Employee6_id;
class Employee3 {
    constructor(id, name, address) {
        // properties
        // private properties use #
        _Employee3_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee3_id, id, "f");
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
        return __classPrivateFieldGet(this, _Employee3_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee3_id, id, "f");
    }
}
_Employee3_id = new WeakMap();
let jonh = new Employee3(1, 'David', {
    street: 'street1',
    city: 'city1',
    state: 'state1',
    pin: 'pin1'
});
let user = { name: 'David', id: 1, email: 'mail1' };
let user2 = { name: 'David', id: 1, email: 'mail1', salary: 5000 };
class Employee6 {
    constructor(id, name, address) {
        _Employee6_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee6_id, id, "f");
        this.name = name;
        this.address = address;
        Employee2.count += 1;
    }
    login() {
        let user1 = { name: 'David', id: 1, email: 'mail1' };
        return user1;
    }
}
_Employee6_id = new WeakMap();
