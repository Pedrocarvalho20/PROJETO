
// mudar a cor do nevbar quando estiver sobre a div 
window.addEventListener ('scroll', alterarCorNavBar);
function alterarCorNavBar (){
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.calendario');
    const calendarioRect = booking.getBoundingClientRect();


        if (calendarioRect.top < 50){
            navbar.classList.add('navbar-solida');
        }else{
            navbar.classList.remove('navbar-solida');
        }

}

// ===== carrossel =====
const clientes = document.querySelectorAll('.cliente');
let clienteAtual = 0;

function mostrarSlide(index) {
    clientes.forEach((cliente, i) => {
        if(i === index ){
         cliente.style.display = 'block';
        }else{
            cliente.style.display = 'none';
        }
    })

}

function proximo() {
    clienteAtual = (clienteAtual + 1) % clientes.length
    mostrarSlide(clienteAtual);
}

function anterior() {
    clienteAtual = (clienteAtual - 1 + clientes.length) % clientes.length
    mostrarSlide(clienteAtual);
}

document.querySelector ('.anterior').addEventListener ('click', anterior);
document.querySelector ('.proximo').addEventListener ('click', proximo);

// mostrar o primeiro cliente 

    mostrarSlide(clienteAtual);