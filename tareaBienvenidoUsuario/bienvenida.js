const $botonSiguiente = document.querySelector('#boton-siguiente');
$botonSiguiente.onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const $h1 = document.querySelector('h1');
    $h1.textContent = `Bienvenido ${nombreUsuario}!`;
    mostrarInfo(nombreUsuario);
    return false;
}

function mostrarInfo(nombreUsuario){
    
    const $mostrarNombre = document.querySelector('#mostrar-nombre');
    $mostrarNombre.innerText = `Nombre: ${nombreUsuario}`;

    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const $mostrarApellido = document.querySelector('#mostrar-apellido');
    $mostrarApellido.innerText = `Apellido: ${apellidoUsuario}`;

    const edadUsuario = document.querySelector('#edad-usuario').value;
    const $mostrarEdad = document.querySelector('#mostrar-edad');
    $mostrarEdad.innerText = `Edad: ${edadUsuario}`;

    const $info = document.querySelector('#informacion');
    $info.className = '';

    changeColorBody();

    return false;
}

function changeColorBody(){
    const $body = document.querySelector('body');
    $body.className = 'body';

    return false;
}