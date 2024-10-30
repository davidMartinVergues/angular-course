
//? Decorators

//? una decorador es una funcion q 

function classDecorator<T extends {new (...args:any[]):{} }>(
    constructor:T
){

    return class extends constructor{
        newProperty = "New property";
        hello = "override";
    }

}

@classDecorator
export class SuperClass{

    public superProperty:string = '134'

    print(){
        console.log('hola mundo');
        
    }
}



console.log(SuperClass);

const myClass = new SuperClass()

console.log(myClass);


