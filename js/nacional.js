window.onload = () => {
    const texto = document.querySelector('#texto-nacional');
    const botonOcultar = document.querySelector('#boton');
    
    
    botonOcultar.addEventListener("click", function(){
        if (texto.style.display === 'none') {
            texto.style.display = 'block';
        } else {
            texto.style.display = 'none';
        }
    })
    }