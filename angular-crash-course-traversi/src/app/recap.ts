const username: string | number = 'dmv';

const suma = (a: number, b: number) => {
  return a + b;
};

suma(1, 10);

class Persona {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const dmv = new Persona(37, 'dmv');

class Persona2 {
  constructor(private age: number, public lastName: string) {}
}

const dmv2 = new Persona(37, 'dmv');
