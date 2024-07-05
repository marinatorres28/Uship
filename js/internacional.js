window.onload = () => {

    let imagenInternacional = document.querySelectorAll("#img-internacional");

    for (let i = 0; i < imagenInternacional.length; i++) {
        // Agrandar el tamaño de la imagen cuando pasamos por encima
        imagenInternacional[i].addEventListener("mouseover", function () {
            imagenInternacional[i].style.width = "1000px";
            imagenInternacional[i].style.height = "550px";
        })
        // La imagen vuelve a su tamaño original
        imagenInternacional[i].addEventListener("mouseout", function () {
            imagenInternacional[i].style.width = "700px";
            imagenInternacional[i].style.height = "450px";

        })
    }
}
