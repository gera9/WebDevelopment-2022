<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Ticket de turno</title>
    <link rel="preload" href="css/normalize.css" as="style">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="preload" href="css/estilo_principal.css" as="style">
    <link rel="stylesheet" href="css/estilo_principal.css">

</head>

<body>

    <header>
        <h1 class="titulo"> Ticket de Turno <span> 4 </span> </h1>
    </header>
    <main>
        <section class="flex centrar">
            <form class="formulario" id="formulario">
                <fieldset>
                    <div class="contenedor-campos">
                        <div class="campo">
                            <label>Nombre completo de quien realizara el tramite:</label>
                            <input type="text" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Curp:</label>
                            <input type="text" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Nombre:</label>
                            <input type="text" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Paterno:</label>
                            <input type="text" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Materno:</label>
                            <input type="text" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Telefono:</label>
                            <input type="tel" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Celular:</label>
                            <input type="tel" class="input-text">
                        </div>
                        <div class="campo">
                            <label>Correo:</label>
                            <input type="email" class="input-text">
                        </div>
                        <div class="campo">
                            <label>¿Nivel al que desea ingresar o que ya cursa el alumno?</label>
                            <select class="input-text">
                                <option value="0">Nivel</option>
                                <option value="1">Nivel 1</option>
                                <option value="2">Nivel 2</option>
                                <option value="3">Nivel 3</option>
                            </select>
                        </div>
                        <div class="campo">
                            <label>Municipio donde desea estudie el alumno</label>
                            <select class="input-text">
                                <option value="0">Municipio</option>
                                <option value="1">Municipio 1</option>
                                <option value="2">Municipio 2</option>
                                <option value="3">Municipio 3</option>
                            </select>
                        </div>
                        <div class="campo">
                            <label>Seleccione el asunto que va a tratar</label>
                            <select class="input-text">
                                <option value="0">asunto</option>
                                <option value="1">asunto 1</option>
                                <option value="2">asunto 2</option>
                                <option value="3">asunto 3</option>
                            </select>
                        </div>

                    </div>
                    <!--Contenedor-campos-->
                    <div class="flex centrar">
                        <input class="boton" type="submit" value="Generar turno">

                    </div>
                    <div class="contenedor-img">
                        <img src="img/barcode.png" class="imagenes">
                        <img src="img/qr.png" class="imagenes">
                    </div>
                </fieldset>
            </form>
        </section>
    </main>
    <!-- <script src="js/main.js"></script> -->
</body>

</html>