# Dynamics Tips 2.0.0

Elementos dinámicos para páginas web incluye Dropdown, comentarios dinámicos, tooltips y personalizados

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

