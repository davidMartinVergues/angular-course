

const name : string = "David"

/**
 * * Ponemos el export{} para q la aplicacion de node se piense q estamos deficiendo al archivo 01-basic-types.ts como un module
 * * si no hacemnos esto como ya hay una variable "name" nos dice q no podemos redeclararla * 
*/



const hpPoints : string | number = 64

let hpPoints2 : "FULL" | number = 64

hpPoints2 = 2665
hpPoints2 = "FULL"



export {};