- [Angular crash course](#angular-crash-course)
  - [What is angular?](#what-is-angular)
    - [Angular Services](#angular-services)
    - [Angular CLI](#angular-cli)
  - [Why angular?](#why-angular)
  - [Creating Angular app](#creating-angular-app)
    - [Estructura del proyecto](#estructura-del-proyecto)
    - [Crear un nuevo componente utilizando angular/cli](#crear-un-nuevo-componente-utilizando-angularcli)
    - [Conceptos básicos de TS](#conceptos-básicos-de-ts)
    - [Componentes de angular](#componentes-de-angular)
    - [Decorator @Input()](#decorator-input)
    - [Decorator @Output()](#decorator-output)
    - [Directives](#directives)
      - [ngStyle](#ngstyle)
    - [String Interpolation](#string-interpolation)
    - [Property Binding](#property-binding)
    - [Event Binding](#event-binding)
    - [Data Binding](#data-binding)
      - [Custom Validators](#custom-validators)
    - [Directivas de control](#directivas-de-control)
      - [ngIf](#ngif)
      - [ngFor](#ngfor)

# Angular crash course

## What is angular?

Frontend javascript frameowrk. Angular is an app design framework and development platform for creating efficient single-page apps.

The most used stack is on MEAN (Mongo express angular).

Angular is based on components. Components in angular includes:

1. template (HTML)
2. Logic (JS or TS)
3. Styling(css/scss/sass/less)

```javascript
@Component({
    selector: 'app-hero-list', //it will be placed into a tag
    templateUrl: './hero-lis.component.html',
    providers : [HeroService]
}) 

export class HeroListComponent implements OnInit{
    /* your code */
}
```
Components are reusable and can be embedded into the template as an XML-Like tag.

### Angular Services

Angular distinguishes components from services to increase modularity and reusability.

A component can delegate certain tasks to services, such as fetching data from server, validationg user input or logging directly to the console.

### Angular CLI

Standard tooling for angular development.

We need to install it at first 

```
npm install -g @angular/cli
```

It will allow us create:

- angular apps (`ng new my-angular-app`)
- Dev server and easy productions build 
- Commands to generate components, services,...

## Why angular?

* Create dynamic Frontend apps
* Full featured framework (router,http,...).
* Integrated TypeScript (optional, it is not mandatory to know TS to start with angular)
* RxJS - efficient, asynchronous programming
* Test-friendly



## Creating Angular app 

1. `ng new my-angular-app` - follow the steps
   
2. `ng serve` - run dev server on localhost:4200

   1. `ng serve -o` - abre el proyecto en el navegador x defecto
   2. `ng serve -o --port=3500 ` - abre el proyecto en un puerto concreto

3. `ng version` dentro de nuestro proyecto nos dará info de las dependencias q está usando angular

```
Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.1
@angular-devkit/build-angular   13.3.1
@angular-devkit/core            13.3.1
@angular-devkit/schematics      13.3.1
@schematics/angular             13.3.1
rxjs                            7.5.5
typescript                      4.6.3
```

### Estructura del proyecto

1. `src` 

en este directorio está el código de nuestra app (componentes,servicios, routers, style,...)

2. `.browserlistrc`

Dnd se indican los browser en los que tiene que correr nuestra app, a que navegadores tiene que dar soporte.

3. `.editorconfig`

Fija las reglas de styling que tendrá nuestro editor de código para q todos los del equipo trabajen igual, por ejemplo si trabajamos con tabuladores o espacios, cuantos espacios es un tabulador, que charset usará el proyecto (UTF-8),etc 

PAra que este archivo funcione con vscode necesitamnos bajar una extensión (editorconfig for vscode).

4. `tsconfig.json`

Como se configura angular para trabajar con typescript. Por defecto Angular trabaja con TS. Este archivo nos especifica cómo va a compilar, dónde va a transpirar los archivos, versión de JS q utilizaremos, modificar el comportamiento del compilador de angular, etc...

5. `angular.json`

Vamos a configurar diferentes ambientes, por ejemplo el ambiente de staging (ambiente de pruebas antes de salir a producción), ambiente para QA, etc...

6. `karma.conf.js`

Para correr pruebas unitarias.

7. `package.json`
Lo crea node.
dnd se especificas las dependencias del proyecto, veriones, nuestros scripts

8. `.nvmrc`

Este archivo lo creamos nosotros en la raíz del proyecto. Nos permite utilizar el `node version manager` que nos recomendará la versión más adecuada de node para trabajar con nuestro proyecto. 

Sirve para q todo el equipo trabaje con la misma versión de node. Básicamente es un archivo dnd especificamos la versión de node que estamos usando para desarrollar el proyecto 

```javascript
//contenido del archivo .nvmrc
v16.14.0
```

9.  on `index.html`, specificatly on our app-root component 

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularCrashCourse</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

En el tag app-root se renderiza nuestro componente base q es `app.component.html`. Podemos sustituir su contenido con el home page de nuestra app.

### Crear un nuevo componente utilizando angular/cli

```
ng generate component components/social-media-share-buttons
```

### Conceptos básicos de TS 

1. Básicamente TS permite escribir JS añadiendo tipado de las variables. Aunque no es obligado usarlo

```javascript
const username: string | number = 'dmv';
```
Fijar el tipado es importante pej en funciones 

```javascript
const suma = (a: number, b: number) => {
  return a + b;
};

```

gracias a TS el editor nos puede avisar si le pasamos un tipo de dato erróneo a esa función.

```javascript
suma(1, 'a'); // nos salta un error antes de ir al browser
```

2. trabaja con paradigma OOP 

podemos fijar tipos y poder especificar variables privadas dentro de la clase

```javascript
class Persona {
  
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const dmv = new Persona(37, 'dmv');
```

TS simplifica la declaración de clases

```javascript
class Persona2 {

  constructor(private age: number, public lastName: string) {}
}

const dmv2 = new Persona(37, 'dmv');
```

### Componentes de angular

Angular divide las responsabilidades del componente como hemos visto antes. 
La lógica se escibe en TS y el render lo hace el archivo html.

la estructura de un componente vacío es 

```javascript

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```

Hay un par de cosas a destacar :

- **CONSTRUCTOR** 

Funciona cuando inicializamos un nuevo objeto en este caso un nuevo comopnente. 

- **ngOnInit()**

Es un método para el ciclo de vida del componente. Es el método que usaremos habitualmente cuando inicialicemos nuetsro código por ejemplo si queremos indicar cuándo se carga nuestro componente lo indicaríamos en este método o si queremos hacer una petición `http` también iría en este método. 

El component .ts tiene un decorator que le dice qué html está ligado qué selector (tag) usará y qué archivo de styling 

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'david';
   age = 37;
    img =
    'https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=1350&q=75&fit=crop&ar=3%3A1&fm=pjpg&exp=-10';

    names: string[] | number[] = ['david', 'marc', 'julian']; //acepted
    names: string[] | number[] = [1,2,3,4]; //acepted
    names: string[] | number[] = [1,'david']; //not accepted
    
}
```

Como vemos en decorator el selector apunta a `app-root` esto o que hace es meter el componente en la etiqueta app-root del index.html (es dnd empieza la app)

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularCrashCourse</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>


```

Una cosa importante a tener en cuenta que las variables declaradas deben tener acceso público, si las declaro como privadas el html del componente no puede acceder. Por defecto es público no hace falta especificar `public`

### Decorator @Input()

Esto nos permite enviar props (propiedades desde la tag del componente al component.ts) Desde el componente madre donde se encuentra el tag de nuestro componet.

```html
<!--  ******* header component ******  -->
<header>
    <h1>{{ title}}</h1>
    <app-button color="green" text="Add2"></app-button>
</header>

```
Añado propiedades al tag de mi componente y las recibo en el component.ts. Para ello debo utulizar el decorador `@Input`

```javascript
import { Component, OnInit, Input } from '@angular/core';
export class ButtonComponent implements OnInit {

  @Input() text: string
  @Input() color!: string

  constructor() {

    this.text = 'Add'

  }

  ngOnInit(): void {
  }

}

```
TS se asegura siempre que esa propiedad exista, entonces puede ser q desde el tag no enviemos la propiedad `text` por eso nos obliga a hacer una de las dos cosas siguientes: 

1. añadimos al final del nombre de la variable un signo de admiraicón `!` esto indica a TS q **seguro** enviaremos esa propiedad  (lo q hago con color), la otra opción es ponerle un interrogante `?` indicando q esa propiedad será opcional 
   
```javascript
  @Input() color?: string

```


1. Inicializo esa variable en el constructor, con un valor por defecto y en caso q desde el tag del componente no le envie la propiedad utilizará este valor por defecto

La estrategia de esto es q puedo tener un componente button que según las props que le pase puedo modificarlo ligeramente, en mi caso le paso las props de texto y color del button

### Decorator @Output()

Este decorador nos servirá para que nuestro componente (en nuestro caso un button) emita un evento. Este evento podrá ser capturado por otro componente por ejemplo el componente madre header

Tenemos q importar Output y EventEmitter 

```html
<button 
  (click)="onClick($event)"
  [ngStyle]="{ 'background-color': color }"
  class="btn"
  >
    {{text}}
</button>

```
Añadimos un evento `click` a nuestro botón y cuando se active ejecute la función `onClick` que ésta a su vez lanzará un evento propio llamado `btnClick`. Para poder emitir ese evento usamos `@Output` para inicializar una variable `btnClick` q será un `EventEmitter`.


```javascript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class ButtonComponent implements OnInit {

  @Input() text: string
  @Input() color!: string

  @Output() btnClick = new EventEmitter(); // el evento

  constructor() {this.text = 'Add'}

  ngOnInit(): void {}

  onClick(event: Event) {
    
    event.preventDefault()

    this.btnClick.emit()

  }

}

```

Ese evento emitido será capturado en el componente madre (header) para ello 
```html
<header>
    <h1>{{ title}}</h1>
    <app-button 
      color="green"
      text="Add2"
      (btnClick)="toggleAddTask()">
    </app-button>
</header>

```




### Directives

#### ngStyle

Esta directiva la podemos agregar en un tag para modificar el css inline. En el ejemplo del botton le paso la props color para q este surja efecto debemos utilizar la directiva de ngStyle

```html

<button 
  [ngStyle]="{ 'background-color': color }"
  class="btn"
  >
   {{text}}
</button>


```



### String Interpolation 

Lo usamos para q se renderice directamente en el html.
Es la manera que podemos pasarle datos a nuestros componentes. Para ello usamos las dobles llaves `{{ tus datos }}`

```html
<h1>Hello world</h1>
<h2>{{ 'Hola dmv'.repeat(2) }}</h2>

<h3>3+3={{3+3}}</h3>
```
Para traer variables declaradas en el componente usamos tb string interpolation 

```html
<h1>Hello world</h1>
<h2>{{ 'Hola dmv'.repeat(2) }}</h2>

<h3>3+3={{3+3}}</h3>

<h3>Hola! soy {{name}} y tengo {{age}} años</h3>

<img src="{{img}}" alt="">
```

### Property Binding 

Manera que podemos modificar atributos de elementos de html desde el controlador, pej modificar el src de una images, etc...

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public name = 'david';
  age = 37;
  img =
    'https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=1350&q=75&fit=crop&ar=3%3A1&fm=pjpg&exp=-10';

  btnDisabled = true;

  person = {
    name: 'dmv',
    age: 66,
    avatar:
      'https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=1350&q=75&fit=crop&ar=3%3A1&fm=pjpg&exp=-10',
  };

  toggleBtn() {
    this.btnDisabled = this.btnDisabled ? false : true;
    //this.btnDisabled =!this.btnDisabled;
  }

  age_plus() {
    this.person.age++;
  }
  miScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop); // en que posición está el scroll
  }

  myKeyup(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
```

```html
<button [disabled]="btnDisabled">Enviar</button>

<input type="text" [value]="name">

<progress max="100" [value]="age" ></progress>

<img [src]="img" width="100">
```

si queremos acceder a las propiedades contenidas en un objeto lo hacemos con la notación del punto. 

```html
<input type="text" [value]="person.name">
<progress max="100" [value]="person.age" ></progress>
<img [src]="person.avatar" width="100">
```

### Event Binding

1. click event 
   
Podemos capturar eventos, pej de boton

```html
<h1>Event binding</h1>

<button [disabled]="btnDisabled">Enviar</button><br><br>
<button (click)="toggleBtn()" >Toggle Buton</button>

<p>{{person.age}}</p>
<button (click)="age_plus()">age++</button>
```

```javascript
export class AppComponent {
  public name = 'david';

  btnDisabled = true;

  toggleBtn() {
    this.btnDisabled = !this.btnDisabled;
    //this.btnDisabled = this.btnDisabled ? false : true;
  }
    age_plus() {
    this.person.age++;
  }
}
 
```

2. scroll event

```html
<div class="box" (scroll)="miScroll($event)">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id, debitis</p>
</div>

```

```javascript
export class AppComponent {

  public name = 'david';
  
  miScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop); // en que posición está el scroll
  }
}
 
```
leemos el evento ocurrido en un elemento HTML, en este caso el evento scroll del <p>


```html
<div class="box" (scroll)="miScroll($event)">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id, debitis numquam provident unde exercitationem recusandae laboriosam nesciunt modi ipsam optio, ullam quae fugiat molestias </p>
</div>
```

3. keyup event

```html
<p>tu nombre:{{person.name}}</p>
<input type="text" (keyup)="myKeyup($event)">
```

```javascript
export class AppComponent {

person = {
    name: 'dmv',
    age: 66,
    avatar:
      'https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress%2Cformat&w=1350&q=75&fit=crop&ar=3%3A1&fm=pjpg&exp=-10',
  };


  myKeyup(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}

```

Tenemos más eventos que se pueden consultar aquí : [events guide](https://www.eduforbetterment.com/lists-of-useful-events-types-for-event-binding-in-angular/)

### Data Binding

Es una fusión entre el event biding (la sintaxi para marcarlo es (event) ) y setear una propiedad (se usa los [] por ejemplo en un input [value]). 

En Angular para conseguir el **data binding** usamos `ngModel` que combina las dos anteriores y la sintaxi es `[(ngModel)] = "SomeValue" ` esto será muy útil para los imputs.

ngModel en relación a los inputs nos permite:

1. Está pendiente del estado del input
2. si ese campo es valido o no 
3. interacción del usuario tiene con ese input 
4. sincroniza el valor constantemente 

Antes de usar ngModel tenemos que habilitar `angular forms` para ello vamos a `app.module.ts` :

- añadimos el import 
- añadimos el módulo forms en la sección **imports**

```javascript
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponentDMVComponent,
    TestComponentDMV2Component,
    SocialMediaShareButtonsComponent,
  ],
  imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})

```

Para poner en práctica ngModel construiremos un formulario utilizando el paquete `Angular Forms`. 

ahora incluimos el siguiente código en el html 

```html 
<p>Nombre:{{person.name}}</p>
<input type="text" [(ngModel)]="person.name">
```

Con este código cada vez que escribamos en el input colodará ese texto en el <p> sin necesidad de capturar nosotros el evento. 

Con ngModel tb podemos validar ese input, hay q tener encuenta q ngMoel funciona mucho con validaciones nativas de HTML 

```html 
<p>Nombre:{{person.name}}</p>
<p>Edad:{{person.age}}</p>

<input type="text" #nameInput="ngModel" [(ngModel)]="person.name" required>  <br>
<input type="number" max="18" min="10" #ageInput="ngModel" [(ngModel)]="person.age" required>

<p>Valid: {{nameInput.valid }}</p>
<p>Valid: {{ageInput.valid }}</p>
```
Esta variable `person.name` debe estar en el archivo app.component.ts de mi componente.

Para poder acceder a la validación del campo tenemos que darle un nombre al input que contiene el ngModel, para declarar esta variable lo hacemos dentro del input con esta nomenglatura.

```
#nameInput="ngModel"
```
y para acceder al estado de esa variable hacemos 

```
{{ nameInput.valid}}
```

Para validar el input ngModel funciona con las validaciones de HTML. También podemos crear nuetsros custom validators.

#### Custom Validators 

hay que completarlo

https://indepth.dev/posts/1319/the-best-way-to-implement-custom-validators


### Directivas de control 

#### ngIf

Permite en función de una validación si se muestra o no ese elemento, podemos añadir un `else`

```html
<input type="text" required #nameInput2="ngModel" [(ngModel)]="person.name" >
<p *ngIf="(person.name).toLowerCase()==='david' && person.age>=18; else myblock_else_simple">estas en el if - Soy David </p>

<ng-template #myblock_else_simple>
  <p>estas en el else - eres otra persona</p>
</ng-template>
```

El ngIf tiene la alternativa de poner un `else` pero no del `else if` para hacer un else if hay q hacerlo así:

```html

<p *ngIf="person.name==='pedro'; else myblock_else_if_block ">Hola Pedro</p>

<ng-template #myblock_else_if_block >
  <p *ngIf="(person.name).toLowerCase()==='marc'; else myblock_else">estas en el else if - Soy Marc</p>
</ng-template>

<ng-template #myblock_else>
  <p>estas en el else - eres un desconocido</p>

</ng-template>
```

Otra manera de hacer un ngIf es usando ng-container

```html 
<ng-container *ngIf="1==1" >
  <p> esto está dentro de un ng-container</p> 

</ng-container>
```

#### ngFor 

Permite iuterar un array. 

en primer lugar en nuestro archivo `app.component.ts` tenemos que tener un array declarado.

```javascript
 names: string[] = ['david', 'marc', 'julian'];
```

y en el html lo iteramos 

```html 

<h1>ngFor</h1>

<ul>
  <li *ngFor="let name of names; index as i">
    {{i}} => {{name}} 
  </li>
</ul>
```