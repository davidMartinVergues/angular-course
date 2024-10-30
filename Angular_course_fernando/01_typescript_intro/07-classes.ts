import { realpath } from "fs";


// *sintaxi clasica
export class Person{

    public name:string;
    private address?:string;

    constructor(name:string, addres:string){

        this.name = name;
        this.address = "Barcelona";

    }

}

// *sintaxi Nueva
export class Person2{

    constructor(public name:string, private addres:string="No addres"){}

}


// *extender clases


export class Hero extends Person2{
    
    constructor(
        public alterEgo:string,
        public age:number, 
        public realName:string
    ){
        super(realName)
    }
    
}

const dav = new Hero("dav",45,'David')


//? La herencia entre clases es útil hasta un max de 3 niveles de herencias más se vuelve dificil de manejar y ES PREFERIBLE usar una composicion

// ? COMPOSICION

//? en lugar de utilizar el super vamos a crear una variable del tipo de la clase q queremos q "herede"

export class Hero2{

    constructor(
        public alterEgo:string,
        public age:number, 
        public realName:string,
        public person:Person2,
    ){}
}

const david = new Person2('David','BCN')

const dav2 = new Hero2("dav",45,'David', david)

