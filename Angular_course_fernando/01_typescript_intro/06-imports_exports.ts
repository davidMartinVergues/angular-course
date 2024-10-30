
import { MyProducts, taxCalculation } from './05-basic-destructuring'


const shoppingCart : MyProducts[] = [
    {description:"nokia",
        price:52.5
    }
]

const tax = 0.15


const [total, taxes] = taxCalculation({tax,products:shoppingCart})

console.log('total', total);
console.log('taxes', taxes);
