interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}
let user1 : User = {name:'David',id:1,email:'mail1'}

// para acceder a los properties del objeto podemos usar notación del punto

user1.name;

// si usamos destructuring
// la sintaxis name:userName estamos renombrando la variable a userName
let {name:userName,email} :User = user1;

console.log(userName);

