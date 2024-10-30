
//? Generics

export function whatsMyType<T>(argument: T):T{
    return argument
}


const amIaString  = whatsMyType<string>("hello world")
const amIaNumber  = whatsMyType<number>(13.5)
const amIaArray  = whatsMyType<number[]>([1,2,3])


console.log(amIaString.split(' '));
console.log(amIaNumber.toFixed());
console.log(amIaArray.join('-'));
