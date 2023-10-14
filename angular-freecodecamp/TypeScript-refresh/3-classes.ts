// classes typescript


// con el contructor por defecto, no hace falta especificarlo
// pero entonces nos saldrá un error para evitarlo después del nombre de la property
// debemos añadir un !

class Employee {

    // properties

    id!: number;
    name!: string;
    address!: string;

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

    // properties
    // private properties use #
    #id: number;

    // otra keyword importante es protected, permite acceder a las clases q extienden de esta pero no desde el objeto
    protected name: string;
    address: string;

    // static variable

    static count: number;

    constructor(id: number, name: string, address: string) {
        this.#id = id
        this.name = name
        this.address = address

        Employee2.count += 1;
    }

    // creating methods inside classses

    getNameWithaddress(): string {

        return `${this.name} ${this.address}`
    }

    // static properties, metodos o variables, q son propias de la clase.
    // solo se puede acceder desde la clase
    static getEmployeeCount() {
        return Employee2.count;
    }

    // getters and setters

    get empId(): number {
        return this.#id
    }

    set empId(id: number) {
        this.#id = id
    }
}

class Manager extends Employee2 {
    constructor(id: number, name: string, address: string) {

        super(id, name, address)
    }
}


let emp2 = new Employee2(2, 'dav', 'a');

let manager = new Manager(2, 'dav', 'a');
// getters and setters
emp2.empId = 200;
console.log(emp2.empId);



