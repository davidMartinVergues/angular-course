// creating interface

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}



class Employee3 {

    // properties
    // private properties use #
    #id: number;

    // otra keyword importante es protected, permite acceder a las clases q extienden de esta pero no desde el objeto
    protected name: string;
    address: Address;

    // static variable

    static count: number;

    constructor(id: number, name: string, address: Address) {
        this.#id = id
        this.name = name
        this.address = address;

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
