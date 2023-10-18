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


let jonh = new Employee3(1,'David',{
    street: 'street1',
    city: 'city1',
    state: 'state1',
    pin: 'pin1'})




// other interface cases

// making a optional properties using ?

interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}
let user : User = {name:'David',id:1,email:'mail1'}



// extending interfaces

interface Employee5 extends User{
    salary:number;
}

let user2 : Employee5 = {name:'David',id:1,email:'mail1', salary:5000}



// interfaces with method definition para que una clase lo implemente

// podemos indicar que se requiere implementar un método `login()` que debe devolver un User, la implementación se hará en la clase

interface Login {
    login():User;
}

class Employee6 implements Login {

    #id: number;
    protected name: string;
    address: string;
    static count: number;

    constructor(id: number, name: string, address: string) {
        this.#id = id
        this.name = name
        this.address = address

        Employee2.count += 1;
    }

    login():User{

        let user1 : User = {name:'David',id:1,email:'mail1'};

        return user1
    }
}