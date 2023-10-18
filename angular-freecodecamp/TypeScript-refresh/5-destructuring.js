"use strict";
let user1 = { name: 'David', id: 1, email: 'mail1' };
// para acceder a los properties del objeto podemos usar notación del punto
user1.name;
// si usamos destructuring
let { name: userName, email } = user1;
console.log(userName);
console.log(name);
