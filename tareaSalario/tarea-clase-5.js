const $botonSueldo = document.querySelector('#boton-calcular-sueldo');
$botonSueldo.onclick = function(event){
    event.preventDefault();
    const sueldoUsuario = Number(document.querySelector('#sueldo-usuario').value);
    mostrarSueldoMensual(sueldoUsuario);
}

function mostrarSueldoMensual(sueldoAnual){
    const mesesEnUnAnio = 12;
    const sueldoMensual = sueldoAnual / mesesEnUnAnio;
    document.querySelector('#salario-mensual').value = sueldoMensual;
    document.querySelector('#resultado').className = '';
}
