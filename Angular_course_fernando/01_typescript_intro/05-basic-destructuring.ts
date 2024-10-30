
interface AudioPlayer{
    audioVlolum: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author:string;
    year:number;

}


const audioPLayer:AudioPlayer = {
    audioVlolum: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: "autor 1",
        year: 2024
    }
}


/**
 * ? La desestructuracion se puede aplicar en los objetos, en las importaciones/exportaciones de los modulos, en los argumentos de funciones
 * ? en general consiste en poder tomar distintas propiedades desde nos interese, por ejemplo un objeto
 */

// ! sin destructuring

console.log(audioPLayer.song)


//! con destructuring

//

const { song } = audioPLayer;

console.log("usando destructuring, song : ", song)

// ? ahora bien si ya tengo otra variable con el nombre song puedo indicar q quiero extraer esa propiedad pero a la vez le quiero cambiar el nombre


const { song : anothersong , songDuration : duration, details : {author}  } = audioPLayer;

console.log("usando destructuring pero cambiando el nombre de la variable a  anothersong : ", song)



//? DESTRUCTURING DE ARRAYS

// * necesitamos saltar o asignarles una variable a los otros elementos del array.

 const [,,trunks, bulma = "Not found"] : string[] = ['goku','vegeta', 'trunks'] // ! ponemos "," para indicar q esos datos no los queremos y que queremos llegar al ultimo aunq tb valdria como  [p1,p2,trunks, bulma = "Not found"]
                                                                                // ! no exsteria bulma podemos darle un valor x defecto


 console.log(bulma)



 //? destructuring de argumentos en funcioines


export interface MyProducts {
    description:string;
    price:number;
}


const phone:MyProducts = {
    description:"nokia",
    price:150.65
}


const tablet:MyProducts = {
    description:"xiaomi",
    price:350.65
}



export interface TaxCalculationOptions{
    tax:number;
    products: MyProducts[]
}

export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    
    let total = 0

    const {tax,products} = options


    
    products.forEach( ({price}:MyProducts) => total+=price) 

    return [total, total*tax]
    
}

const shoppingCar: MyProducts[] = [phone,tablet]

const tax = 0.15

const [total, taxes] = taxCalculation({
    tax: tax,
    products: shoppingCar
})

//! en ES6 cuando tenemos un objeto que su propiedad tiene el mismo nombre q su valor, en nuestro caso tax:tax solo con que escribamos "tax" es suficiente 

/**
 ** const result = taxCalculation({
 **   tax,
 **   products: shoppingCar
 ** })

 * 
 */

 console.log("total", total);
 console.log("TAX", taxes);
 