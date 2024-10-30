export const productList:Product[] = [
    {id:1, name: 'product1', price: 10 , description: "", color: 'red' },
    {id:2, name: 'product2', price: 20 , color: 'red' },
    {id:3, name: 'product3', price: 30 , description: "description3", color: 'red' },
    {id:4, name: 'product4', price: 40 , description: "description4", color: 'red' },
    {id:5, name: 'product5', price: 50 , description: "description5", color: 'red' },
    {id:6, name: 'product6', price: 60 , description: "description6", color: 'red' },
    {id:7, name: 'product7', price: 70 , description: "description7", color: 'red' },
    {id:8, name: 'product8', price: 80 , description: "description8", color: 'red' }
]


export interface Product {
    id:number;
    name:string;
    price:number;
    description?:string;
    color:string;

}