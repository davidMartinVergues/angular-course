

let skills : string [] = ['bash','Counter','Healing']


/**
 * * Una de las diferencias entre interface y types es q cuando compilemos el codigo de TS a JS las interfaces no se pasan a JS, es decir el archivo JS sera mas ligero.
 */

type CharacterType = {
    name:string;
    hp:number;
    skills: string[];
    hometown?:string;

}

interface CharacterInterface {
    name:string;
    hp:number;
    skills: string[];
    hometown?:string; //opcional

}


const strider:CharacterInterface ={
    name: "david",
    hp: 100,
    skills: ['bash', 'Counter'],
}

const strider2:CharacterType ={
    name: "david",
    hp: 100,
    skills: ['bash', 'Counter'],
}

strider2.hometown = "rivendel"
console.table(strider2)
export {};