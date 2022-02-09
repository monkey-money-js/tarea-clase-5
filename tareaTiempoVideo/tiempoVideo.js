const arrayHoras = document.querySelectorAll('.horas');
const arrayMinutos = document.querySelectorAll('.minutos');
const arraySegundos = document.querySelectorAll('.segundos');

const $botonCalcular = document.querySelector('.boton-calcular');
$botonCalcular.onclick = function(){
    calcularTiempo();


    return false;
}

function calcularTiempo(){
    
    let totalHoras = 0;
    for (let i=0; i<5; i++){
        totalHoras += Number(arrayHoras[i].value);
    }

    let totalMinutos = 0;
    for (let i=0; i<5; i++){
        totalMinutos += Number(arrayMinutos[i].value);
        if (totalMinutos > 59){
            totalHoras++;
            totalMinutos -= 60;
        }
    }

    let totalSegundos = 0;
    for (let i=0; i<5; i++){
        totalSegundos += Number(arraySegundos[i].value);
        if (totalSegundos > 59){
            totalMinutos++;
            totalSegundos -= 60;
        }
    }

    mostrarInfo(totalHoras,totalMinutos,totalSegundos);
    
}

function mostrarInfo(totalHoras,totalMinutos,totalSegundos){
    const $resultado = document.querySelector('#resultado');
    $resultado.textContent = `El tiempo total de videos es de ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`;
}
    
