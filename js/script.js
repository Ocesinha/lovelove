let button = document.getElementById("naoclique");

function gerarnumero(max = 99, min = 1) {
    let numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

// Inicializa o número sorteado
let numbersorteado = gerarnumero();

button.addEventListener('click', function () {
    // Atualiza o número sorteado
    numbersorteado = gerarnumero();
    button.style.position = 'absolute';
    button.style.top = `${numbersorteado}%`; 
    button.style.right = `${numbersorteado}%`;
});
