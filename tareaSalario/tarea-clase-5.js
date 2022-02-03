const $botonSueldo = document.querySelector('#boton-calcular-sueldo');
$botonSueldo.onclick = function(event){
    const $sueldoUsuario = document.querySelector('#sueldo-usuario');
    const sueldoUsuario = Number($sueldoUsuario.value);
    mostrarSueldoMensual(sueldoUsuario);
    event.preventDefault();
}

function mostrarSueldoMensual(sueldoAnual){
    const sueldoMensual = sueldoAnual / 12;
    
    document.querySelector('#salario-mensual').value = sueldoMensual;
    document.querySelector('#resultado').className = '';
    
}
