# FullStackMean

## Fundamentos de Angular
### 24/03/2024
Hoy he descargado un proyecto Angular y he aprendido a mostrar la página en el localhost desarrollada en vivo actualizando la página según hacía cambios en la página. Para crear un proyecto de angular solo tienes que escribir en la consola: **`ng n (nombreProyecto)`**, pero antes, tendrás que tener instalado el nodejs, npm y angular.
Para mostrar el proyecto en la web, tienes que escribir en la consola el comando **`ng s`** e irte al navegador al puerto **http://localhost:4200**

### 26/03/2024
Acabo de aprender cómo se crea un componente desde cero en angular, usando comandos de consola y sin usarlos. En consola, solo tienes que irte a la carpeta del proyecto y poner: **ng g c (nombreComponente)**.
Los componentes tienen 3 datos importantes, que son el *'selector'*, *'template'*, y *'style'*. El *'selector'* es el nombre de la etiqueta del componente, con la que se llamará para poder usarla en nuestra página web. El *'template'* es la plantilla que usará el componente, es decir, el archivo html del componente (diseño). Por último, el *'style'* es el archivo css del propio componente, es decir, guarda los estilos que contendrá ÚNICAMENTE el componente.

![image](https://github.com/Papilla/FullStackMEAN/assets/50876042/d422314c-8184-4aa8-a926-b68cb554515b)

Los componentes pueden llamarse entre sí utilizando el *'selector'*, y funciona exactamente igual que como hicimos en la creación de componentes en la segunda evaluación de DI. Cada componente tiene su propio código html, sus estilos y su archivo que contiene información sobre este, que tendrá como extensión "ts". Este archivo contiene una clase, por lo que podrá contener objetos y variables dentro de este y llamarlos en otros componentes como se ve a continuación.

![image](https://github.com/Papilla/FullStackMEAN/assets/50876042/e8e405d8-4f6c-431e-9b1a-032fad891b5f)
 
Para poder usar estas variables dentro del mismo componente en el que se han creado, se llaman utilizando *{{variable}}* dentro de una etiqueta html, por supuesto, las variables privadas no se pueden mostrar directamente.
Si se quieren mostrar los datos de dirección, se puede hacer de dos maneras, la primera sería de esta manera: *{{address | json}}* al ser un objeto en json. La otra forma de hacerlo sería llamando dato por dato mediante el punto.
![image](https://github.com/Papilla/FullStackMEAN/assets/50876042/17dbe041-0e9b-4cbd-9546-cdb926e75b26)

### 29/03/2024
Hoy he aprendido a hacer eventos, respuestas y recoger datos interactuando directamente con el usuario. Tambien puedo guardar datos que escriba el usuario en la página y mandarle datos de vuelta. A parte, puedo cambiar valores del html o del scss según los datos que se les pasen, por ejemplo, bloquear la compra de un producto si no hay stock. A continuación hay una captura del código html de una tarjeta de compra cualquiera con estilos propios y que muestra en consola los datos que se le pasan al formulario.
![image](https://github.com/Papilla/FullStackMEAN/assets/50876042/6d866e8c-6832-496c-bea4-566d725c7793)
Tambien se pueden mostrar los datos de una mejor manera para el usuario usando Pipes. Para usarlos tienes que agregar un **|** dentro de los dobles corchetes y escribir una función que hará automáticamente el formateo necesario como se ve a continuación.
![Captura de pantalla 2024-03-29 203232](https://github.com/Papilla/FullStackMEAN/assets/50876042/27460066-ee06-4538-ab53-1e62dd13d0e3)
Las operaciones lógicas como el *if-else*, el *for*, el *switch*... Se pueden utilizar en Angular en forma de atributos de una etiqueta, anteponiendo un ***ng** y luego la operación a llevar a cabo. Dentro de las comillas dobles, se hace la cláusula normal del operador que utilicemos en cuestión, aunque solo se puede usar uno de estos por cada etiqueta. Por esto, en Angular hay etiquetas *invisibles* que se llaman *ng-container*, que son como un *div* pero no hacen retornos de carro, y sirven para encapsular estas operaciones como vemos en la siguiente imagen.
![image](https://github.com/Papilla/FullStackMEAN/assets/50876042/5e4f0daa-ecf4-400c-a4a5-806e72191da5)

### 06/04/2024
Ahora puedo tener mi código ordenado según las clases y para que se necesiten cada una dentro de módulos, es decir, los componentes estarán dentro de un módulo que se llama *componentes*, y las distintas páginas que vaya utilizando (página principal, about us...) irán dentro de otro módulo llamado pages. De esta manera el código estará más limpio y más ordenado. Pero para poder utilizar los componentes que estén dentro de estos módulos, se necesitan añadir a un array de exports en el **.module.ts*, exactamente igual como el que tendremos de imports, pero dentro del array añadiremos los componentes que querramos utilizar.
Para poder moverse entre las distintas páginas se necesitará añadir en el *app.component.html* (el html principal) la etiqueta **router-outlet** la cual sirve para que angular redireccione automáticamente las páginas que queremos. Pero eso no es todo, para decirle qué páginas queremos mostrar, iremos al *app-routing.module.ts* y dentro del array de Routes añadiremos la siguiente línea de código: 
```angular
{ path: 'products', component: ProductsComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent },
```
La segunda línea sirve para tener una página principal, usaremos el recirectTo y el pathMatch como parámetro, y la tercera línea sirve para tener una página de Not Found en caso de que no se encuentre la redicrección a la página.
Para poder utilizar los enlaces a estas redirecciones en nuestra página web, utilizaremos una etiqueta *a* pero con el parámetro *routerLink*, que sirve exactamente igual que el *href* pero en angular se utiliza el otro para que pueda moverse entre páginas de forma automática.
```angular
<a routerLink="/products" routerLinkActive="active">Products</a>
```
También se pueden recoger datos mediante el *HttpClient* recogiendo los datos de un archivo, en este caso, estoy recogiendo los datos de un archivo json con los datos de los productos dentro de la carpeta assets. Para recogerlos, solo se necesita llamar a la función de recoger los datos dentro del *OnInit()* del componente que se quiere utilizar, en este caso, el de productos. Es necesario implementar un **provider** llamando a la clase donde recogemos los datos del json mediante el HttpClient y por supuesto, importar la clase HttpClientModule en el *app.module.ts*.

## Uso del DOM
### 07/04/2024
Hoy he aprendido qué es el DOM, cómo utilizarlo bien y otras formas de uso, en este caso con el Renderer2. De esta manera, he podido crear eventos a partir de elementos del DOM, creando, modificando y borrando elementos, añadiendo estilos a los párrafos...
Para llamar a un elemento, tienes que añadir el *#* dentro de la etiqueta y se recoge mediante un ViewChild como un *ElementRef*.
```angular
<p #aventureros>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
            probably just keep going until we run out of words.</p>

@ViewChild('aventureros') aventurerosElement: ElementRef | undefined
```
Para añadir clases o cambiar textos, tienes que crear un Render y llamarlo constantemente en las funciones que tengas dentro del archivo *app.component.ts* y coger los elementos necesarios, en este caso cogeríamos el *aventurerosElement*.
```angular
cambiarTexto(elemento: any, texto: string) {
    this._render.setProperty(elemento.nativeElement, 'outerText', texto);
    this._render.removeClass(this.aventurerosElement?.nativeElement, 'bg-danger')
  }
```

## Comunicación entre componentes
### 13/04/2024
Ahora ya sé enviar datos de un componente padre a un componente hijo (*padre => hijo*) mediante **@Input()** y la variable que se quiera recoger.
```js
  @Input() casa!: string;
  @Input() color!: string;
  @Input() titulo!: string;
```
De la misma manera, se pueden recoger datos del hijo con el padre (*hijo => padre*) mediante **Output()**, aunque esta vez se tendrá que usar el evento emit() para enviar los datos.
```js
  @Output() elementoAdd = new EventEmitter<any>();
  this.elementoAdd.emit({ nombre: nombre, casa: this.casa, color: this.color });
```

## Personalizar temas en Angular Material
### 14/04/2024
En este módulo del curso, he aprendido a implementar mi propia paleta de colores usando Angular Material. Para ello, solo tenemos que ejecutar el comando **`@angular/material`** y seguir los pasos pertinentes que aparecerán por consola. Una vez hecho esto, nos crearemos un archivo *.scss (archivo de estilos) en la carpeta *assets* y añadiremos las siguientes líneas:
```js
@use '@angular/material'as mat;
@include mat.core();
```
A continuación, implementaremos varios colores (yo cogí automáticamente una variedad de colores en la página *http://mcg.mbitson.com/*) y crearemos las variables para cada paleta de colores, escogiendo el color que más nos guste. Ahora definiremos el tema principal con los colores que hemos escogido con los nuestros nuevos colores y para finalizar, incluiremos nuestro nuevo tema a todos los temas de los componentes.
```js
$my-primary: mat.define-palette($custom-primary-palette, 900);
$my-accent: mat.define-palette($custom-accent-palette, 600);
$my-warn: mat.define-palette($custom-warn-palette, 800);

$my-theme: mat.define-light-theme((color: (primary: $my-primary,
            accent: $my-accent,
            warn: $my-warn,
        ),
    ));

@include mat.all-component-themes($my-theme);
```
Para finalizar, solo tendremos que ir a nuestro archivo *angular.json* y añadir, en el array de **"styles"** la ruta relativa del archivo que acabamos de crear.

## Consumir APIs externas en Angular
### 20/04/2024
Ahora aprendí a usar apis externas en un proyecto de angular mediante el método Http. Mediante el método http.get({url}) puedes acceder mediante el método get a una api y sacar todos los datos necesarios.
```js
this.http.get(`https://pokeapi.co/api/v2/pokemon`)
```
Dentro de la url se puede hacer una consulta más o menos específica, recogiendo el dato de un solo pokémon (en este caso, claro está), o recogiendo los datos de todos.

## i18n: Internacionalización en Angular
### 22/04/2024
En este módulo del curso he aprendido a cambiar el idioma de los textos de un proyecto en Angular usando i18n. Todo lo que hay que hacer es añadir el atributo *`i18n`* en todas las etiquetas que queramos cambiarle el idioma. Después, tenemos que ir a la carpeta de locales y cambiar los textos que queramos cambiar de idioma, y se cambia añadiendo en otro archivo, las etiquetas que sean de *source*, se duplican, se le cambia la etiqueta a *target*, y en esta nueva etiqueta se le cambia el texto al idioma que se quiere añadir. Un ejemplo sería el siguiente:
```js
<source>Congratulations! Your app is running. 🎉</source>
<target>Felicidades! Tu app está funcionando a tiempo real. 🎉</target>
```
Para finalizar, se tienen que añadir las configuraciones pertinentes (añadir el i18n y el locale) dentro de los archivos de *package.json* y *angular.json*.

## Desarrollo de aplicaciones web con NodeJS y Express
### 28/04/2024
En este curso he aprendido a manejar el NodeJS y el Express, que son dos entornos de programación a tiempo real para crear servidores. Funciona muy parecido al javascript, pero la diferencia es que no trabaja dentro de una página web, funciona de forma independiente en un propio servidor. Dentro del module.exports, devuelve los datos de una clase para utilizarlo en otros archivos (como si fuera de herencia), pero en este caso, para poder usar las funciones o las variables dentro del module.exports, necesitas llamar a la clase mediante un *require*. En caso de solo querer usar una función o un valor, puedes deconstruir la clase entera usando las llaves `{ }` y dentro poner una clave. En caso de poner al final del require *.default*. Una función callback es una función que funciona exactamente igual que una lambda pero en este caso se añade `() => {}` como parámetro. Esta función espera en tiempo real a que termine y recoge una promesa con *.then* y para finalizar, con un *.catch*. La librería **Fs** sirve para leer y escribir archivos locales.

Hay un tipo de cadenas de texto que se llaman *expresiones regulares* que son aquellas que empiezan y terminan con la '/' y sirven para coincidir combinaciones de cadenas con expresiones regulares. Para leer un archivo Json de manera rápida y sencilla, se utiliza la función JSON.stringify(archivo json).

Con http.createServer() se pueden crear servidores de manera sencilla. Con la librería Express se pueden mandar y recoger datos en un servidor usando get(), post(), delete() y put(). Para recoger estos datos se pueden usar las variables de *req*, que se puede utilizar las *query, params, body...*. Estos valores recogen los datos igual que con otras aplicaciones **REST** pasandole como parámetro al enlace. Otra librería muy conocida y que sirve para mantener constantes en todos los archivos, que es el *.env*. Para recoger estas constantes, se recogen usando el process.env(dato), pero si no viene definido o no existe, se tiene que añadir al final las dos barras '||' como un **OR** para añadir un dato por defecto.

En Express, hay una plantilla por defecto para crear un servidor propio como archivo local. Los archivos que se utilizan para mostrar el diseño de la página web son muy parecidos a los html normal, pero utilizan otra manera de crear esas etiquetas, se utilizan los archivos *.pug*. En este caso, las etiquetas normales (p, h1, a...) solo se llaman al principio de la línea y después el texto que se quiera añadir. Para crear los div, las etiquetas dentro de esta irán tabuladas igual que en python. En caso de querer añadir código javascript, se tendrá que añadir un '-' antes. Para añadir una clase o un id a una etiqueta, se utilizan respectivamente los caracteres '.' y '#' justo después de la etiqueta, sin añadir espacios. Para añadir variables al texto se utiliza *#{variable}* El código quedaría de la siguiente manera:
```pug
  h2#numClientes.usuarios
```

Para hacer una conexión con un servidor a tiempo real necesitaremos utilizar la librería **io** para crear un socket de conexión. Con esto ya puedes crear tus propios eventos y añadirles el nombre que quieras con el `addEventListener()`  y enviar los eventos mediante el `io.emit` para recogerlos dentro del archivo *.pug* con un `socket.on`.

### 06/05/2024
## Creación y testing de APIs con Node.js y Express
En este curso, por ahora, he aprendido a manejar los métodos **GET**, **POST**, **PUT** y **DELETE** en NodeJS y recuperar los datos en distintos formatos, como puede ser **HTML** o **JSON**. Tambíen, con el módulo mysql2 se puede acceder a una base de datos creada, y hacer consultas con los datos pertinentes añadiendo '**`?`**' como valor variable de una query, exactamente igual que con las consultas preparadas en Java, solo que en este caso las variables se la pasan dentro de la función query como segundo parámetro dentro de un array. Para el caso del servidor, seguimos utilizando express y el módulo '**`http`**'.

## Patrones de diseño con NodeJS
Hay una manera distinta de requerir una clase de Javascript en otros archivos a parte de utilizar, como ya conocemos todos, el '**`require`**'. En realidad, se utiliza de manera predeterminada el *require*, pero a esta manera se le llama commonJS. La otra manera de requerir clases externas es con ESM, utilizando `import {nombreClase} / * (en caso de requerir todo) from {nombre}.js`. Es importante tener en cuenta que de esta forma es obligatorio añadir la extensión del archivo que se esté manejando, porque en caso de no hacerlo, dará error. Por el resto se utiliza exactamente igual que el require, puedes hacer una destructuración de la clase, cogiendo solo una variable o una función mediante los corchetes {}. La única cosa que difiere del commonJS es la manera de exportar los archivos, que en este caso, no se utiliza el `module.exports`, se utiliza el `export {variable, función, clase...}`
Los callbacks son funciones que se le pueden pasar como parámetros a las funciones genéricas, que recogen datos y devuelve el valor o valores como resultado, o error en caso de que este ocurra. A esta función, como acabo de explicar, se le pasarán dos variables, la primera siempre será un error, y la segunda el resultado recibido. Los callback siempre se llaman como funciones con la flecha (*=>*) y el resultado de esta se encontrará dentro de la misma, haciendo una devolución. Hay miles de formatos de patrones para usar y crear aplicaciones con NodeJS, como es el caso de los patrones estructurales, donde se puede usar un adaptador para llamar a un método, como por ejemplo, de crear y leer ficheros mediante una base de datos, con los métodos get y put. También se podría usar el decorator, pero este ya sería más complicado ya que necesitas varias clases para tener todo el código bien organizado, usando un *Handler*, *Enhanced*, *Path* y *Stack*. El último caso sería utilizar un **Proxy**, que llamando a la clase Proxy interna de NodeJS, se puede crear una calculadora con los métodos add, divide, multiply recogiendo los valores de los últimos datos que se le hayan pasado a un método interno de la clase.
No obstante, hay otros patrones de comportamiento, que son *Template*, *Strategy* y *Command*. El *Template* llama a los métodos de una clase que tiene un template creado, por lo que solo haría falta indexar y crear los métodos necesarios en esta nueva clase. En el caso de *Strategy*, al no tener una clase que se pueda extender, usaremos una clase entera para añadir todos los métodos que tenemos y llamarlos en el archivo main para poder recoger los datos que necesitemos llamando a la clase que resuelve los datos. Por último, pero no menos importante, está el *Command*, el cual puede crear un servidor y añadir un estado y quitarlos, pero para ello utilizaremos varias clases para poder recoger, crear y guardar bien los datos, teniendolos todos en un archivo a parte, que en este caso sería el **Invoker** donde se guardan todos los valores y los datos del usuario. En el main solo habría que llamar a la clase Invoke y llamar a los métodos necesarios. En una aplicación real, estos métodos irán dentro de botones o en alguna función de eventos.


He intentado progresar en el curso *Mejorando la performance en Angular* y *Angular en el mundo de la multiplataforma* pero no he podido hacer las instalaciones pertinentes, por lo pasaré de estos dos cursos añadiendo el dato que he aprendido que se puede crear más de un subproyecto dentro de un proyecto grande. De esta manera, las aplicaciones más grandes como por ejemplo, de ventas de productos, pueden estar mejor estructuradas separadas por partes para una mejor organización de código.
