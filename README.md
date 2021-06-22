# Dynamics Tips 2.0.0

Elementos dinámicos para páginas web incluye Dropdown, comentarios dinámicos, tooltips y personalizados

## CDN 

Podemos incorporar la librería a través de su CDN.

### Archivo de estilos dynamics.min.css
```html
<link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/19f47fbc1b650b39f7a414765a50f3e45c23c9de/dist/css/dynamics.min.css">
```

### Archivo de javascript dynamics.min.js

```html
<script src="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/19f47fbc1b650b39f7a414765a50f3e45c23c9de/dist/js/dynamics.min.js"></script>
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
    <link rel="stylesheet" href="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/990cca802d0fc6d4659191a70ea6993a1a8fae5a/dist/css/dynamics.min.css">
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
    <script src="https://rawcdn.githack.com/FedericoManzano/dynamics-tips2/19f47fbc1b650b39f7a414765a50f3e45c23c9de/dist/js/dynamics.min.js"></script>

    <script>
        // Inicializa los componentes por defecto
        Dynamics.init()
    </script>
</body>
</html>
```