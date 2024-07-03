let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10 ;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;  
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // SI ya sorteamos todos los numeros
    if (listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todis los numeros posibles');
    } else {
        // Si el numero generado está incluido en la lista, generar otro número
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    
    // Generar el número secreto y esperar a que esté disponible
    numeroSecreto = generarNumeroSecreto();
    
    // Aquí podrías agregar más lógica si fuera necesario
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();
    
    // Indicar mensaje de intervalo de números, generar el número aleatorio e inicializar el número de intentos
    condicionesIniciales();
    
    // Deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

// Inicialización inicial del juego
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
condicionesIniciales();  // Asegura que el número secreto se genere al inicio

