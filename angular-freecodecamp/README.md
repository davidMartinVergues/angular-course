# Angular Course

source: https://www.youtube.com/watch?v=3qBXWUpoPHo&t=26s


## Intro

Tenemos:
 AngularJS (hecho con puro JS)
 Angular (hecho con TypeScript)

### SPA - Single Page Application

Los importante de las SPA es que hay una única request en la que se manda todo el html del sitio web, por lo que si queremos ir a distintas secciones de la página el html ya está en nuestro browser por lo q no tenemos q hacer más request al sitio y solo pediremos al server `datos` de tipo `json` mediante endpoints.

#### SPA y Angular

Angular tiene un módulo llamado `routing` para crear SPAs que nos permitirá acceder a diferentes end-points para recuperar los datos que necesitamos.

## Intro to TypeScript

- Es un lenguaje fuertemente tipado, necesitas declarar qué tipo de dato contendrá la variable

### crear TS app

1. install node
2. `npm init`, creará un package.json
3. install TS `npm install tyscript`
4. inicializar TS `tsc --init`
5. escribes tu código TS
6. compilas el código con el comando `tsc`, ejecutarlo dnd esté el archivo tsconfig.json
7. una vez compilar para hacer run de tu archivo podemos usar node en local `node yourfile`o ejecutarlo en browser.

Después de compiar el programa en TS se genera un archivo con el mismo nombre pero con extensión `.js`

El último comando nos creará un archivo `tsconfig.json` donde especificaremos parámetros para typeScript.

### Data types 

1. string
2. number
3. boolean
4. array
5. enum
6. tuple
7. any
8. void
9. never

ir al archivo "1-data-types.ts"

### Functions

ir al archivo "2-functions.ts"

### Classes

En JS hay clases desde ES6, para usar clases con TS debemos modificar, en el archivo `tsconfig.json`, el apartado `target: ES5` ya q no todos lps browser soportarán esa sintaxis

para mantener las properties como privadas podemos usar `#` o private (pero este último está deprecated)

ir al archivo "3-classes.ts"

### Interfaces

se usan para definir el "molde" para una clase.

ir al archivo "4-interfaces.ts"


