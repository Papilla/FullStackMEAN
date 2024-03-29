# FullStackMean

## Fundamentos de Angular
### 24/03/2024
Hoy he descargado un proyecto Angular y he aprendido a mostrar la página en el localhost desarrollada en vivo actualizando la página según hacía cambios en la página. Para crear un proyecto de angular solo tienes que escribir en la consola: **ng n (nombreProyecto)**, pero antes, tendrás que tener instalado el nodejs, npm y angular.
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

