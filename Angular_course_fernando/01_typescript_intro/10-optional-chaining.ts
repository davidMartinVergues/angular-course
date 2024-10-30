
//? el optional chaining permite evaliuar si un objeto tiene una propiedad y si la tiene úsala si no devuelve undefined pero 
// ? con el operador || (or) puedo definir un valor a devolver en lugar de undefined


export interface Passenger{
    name:string;
    children?:string[];
}


const passenger1 : Passenger = {
    name:'David'
}
const passenger2: Passenger = {
    name:'David',
    children:['natalia','Maria']
}


const printChildren = (passenger:Passenger):void=>{
    const howmanyChildren = passenger.children?.length || 0

    console.log(howmanyChildren);
    
}


printChildren(passenger1)
printChildren(passenger2)


//? para forzar a TS a q acepte q siempre va a venir un valor en esa propiedad podemos usar " ! "

const printChildren2 = (passenger:Passenger):number=>{
    
    const howmanyChildren = passenger.children!.length

    console.log(howmanyChildren);

    return howmanyChildren
    
}
