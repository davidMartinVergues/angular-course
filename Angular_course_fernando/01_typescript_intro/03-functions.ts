import { log } from "console";

function addNumber(a:number,b?:number):number{

    return b != undefined ? a+b : a

}

const result : number = addNumber(2,1)

console.log({result}) // *   {result}s

/**
 * * Cuando ponemos esta sintaxi {result}, básicamente lo que hacemos es crear un objeto cuya propiedad será el mismo nombre de la variable y su valor el valor propio de la variable
 */


// PODEMOS DEFINIR FUNCIONES USANDO  //! arrow funcion

const addNumber2 = (a:number,b:number) : number => a+b

const result2 = addNumber2(2,2)
console.log({result2})

function multiply(a:number,b?:number,c:number = 2):number{
    return a*c
}

const multiplyResult = multiply(5)

console.log({multiplyResult})

/**
 * 
 * * funciones que reciben objetos como argumentos
 * 
 */

interface Character{
    name:string;
    hp:number;
    showHP:() => void;
}

const personaje1 : Character = {
    name:"david",
    hp:50,
    showHP(){
        console.log(`Puntos de vida : ${this.hp}`);
        
    }
}




const healCharacter = (character:Character,amount:number)=>{
    
    character.hp += amount
    
}

healCharacter(personaje1,10)

personaje1.showHP()




export {};