# Dynamics Tips 2.0.0

Elementos dinámicos para páginas web incluye Dropdown, comentarios dinámicos, tooltips y personalizados

## Estructura

```
| > dynamics-tips
    | build
        | moduls
            | position
                * BottomDirection.js
                * TopDirection.js
                * LeftDirection.js
                * RightDirection.js
                * Direction.js
                * Position.js
                * Offset.js
            * Comment.js
            * Dropdown.js
            * Personal.js
            * Tips.js
            | test
                (Test Unitarios)
        * app.js
    | dist
        | css
            | fonts
                * fuentes de los íconos
            * dynamics.css
            * dynamics.min.css
            * dynamics.css.map
        | js 
            * dynamics.js
            * dynamics.min.js
    | node_modules `Dependencias instaladas`
    | sass
        | var
            * _global.scss
        * _comment.scss
        * _dropdown.scss
        * _icons.scss
        * _tips.scss
        * dynamics.scss
    | src
        | moduls
            | position
                * BottomDirection.ts
                * TopDirection.ts
                * LeftDirection.ts
                * RightDirection.ts
                * Direction.ts
                * Position.ts
                * Offset.ts
            * Comment.js
            * Dropdown.js
            * Personal.js
            * Tips.js
            | test
                (Test Unitarios)
        * app.js
        * dynamics.js (main de la lib)
    * LICENSE
    * package.look.json
    * package.json
    * REASME.md
    * tsconfig.json
    * webpack.config.js

```

## CDN 

Podemos incorporar la librería a través de su CDN.

### Archivo de estilos dynamics.min.css
```html
<link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/5b1314c0aff6b0f02a9fa77ceee9f0e5b5c0a6f1/dist/css/dynamics.min.css">
```

### Archivo de javascript dynamics.min.js

```html
<script src="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/5b1314c0aff6b0f02a9fa77ceee9f0e5b5c0a6f1/dist/js/dynamics.min.js"></script>
```

### Template

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Link a los estilos necesarios para los componentes -->
    <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/5b1314c0aff6b0f02a9fa77ceee9f0e5b5c0a6f1/dist/css/dynamics.min.css">
    <title>Hola Mundo</title>
</head>
<body>

    <!--  ACA VA EL CÖDIGO DE LA PÁGINA -->

    <h1 class="tips-ele" style="width:20%"
        data-position="bottom"
        data-info="Este es un tips de <strong>dynamics-tips2.0.0</strong>" >
     Hola Mundo
    </h1>



    <!-- JQUERY min -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- dynamics.min.js -->
    <script src="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/5b1314c0aff6b0f02a9fa77ceee9f0e5b5c0a6f1/dist/js/dynamics.min.js"></script>

    <script>
        // Inicializa los componentes por defecto
        Dynamics.init()
    </script>
</body>
</html>
```
## Instalación

A través de los gestores de paquetes de NodeJs.

```
npm install dynamics-tips
```
```
yarn add dynamics-tips 
```
```
git clone https://github.com/FedericoManzano/dynamics-tips2
```
[dynamics-tips2.zip descarga](https://github.com/FedericoManzano/dynamics-tips2/archive/refs/heads/master.zip)

### Agregar módulo el Angular

```js
import Dropdown from "dynamics-tips/src/moduls/Dropdown";
import Comment from "src/moduls/Comment";
import Tips from "src/moduls/Tips";
import Personal from "src/moduls/Personal";

class ClasePrueba implements OnInit, AfterViewInit {

    // ... Codigo del componente 

    // Ciclo de vida del componente
    AfterViewInit ():void {
        Dropdown.init()
        Comment.init()
        Tips.init()
        Personal.init()
    }
}
```

### En Vue o React

Se puede agregar directamente los archivos `js` del directorio build.

```js
// Archivos Transpilados a js
import Dropdown from "dynamics-tips/build/Dropdown" 
import Comment from "dynamics-tips/build/Comment" 
import Tips from "dynamics-tips/build/Tips" 
import Personal from "dynamics-tips/build/Personal" 

// ... Ciclo de vida del componente despues 
// ... inicializada la vista

Dropdown.init()
Comment.init()
Tips.init()
Personal.init()
```
## Instrucciones

### Tips

Para agregar los tips a un elemento de la página tenemos que utilizar la clase `.tips-ele` al elemento disparador luego al mismo elemento añadir los atributos `data-info` y `data-position` de manera tal de pasarle a la función correspondiente los datos necesarios.

```html
<!-- Codigo de la página-->
<div class="container mt-3">
    <a class="btn btn-force tips-ele" data-position="left" data-evt="click"data-info="<strong>dynamics-tips2.0.0</strong>" >
        Hola Mundo
    </a>
</div>
```

En el pie de la página antes de cerrar el body agregamos el siguiente codigo para que funcione.

```html
    <script>
        Dynamics.initTips()
    </script>
</body>
</html>
```

#### Posiciones (data-position)
- Left
- Right
- Top
- Bottom

#### Eventos (data-evt)
- hover
- click

#### Información (data-info)
- Informacion que se quiere mostrar

### Capturas

![Captura 1 ToolTips](captures/captura1Tips.png "Muestra ToolTips abajo")

![Captura 2 ToolTips](captures/captura2Tips.png "Muestra ToolTips derecha")

![Captura 2 ToolTips](captures/captura4Tips.png "Muestra ToolTips izquierda")


