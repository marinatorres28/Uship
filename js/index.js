// Espera a que la ventana y todos los elementos HTML estén completamente cargados
window.onload = () => {
  
    // Array de datos
    let opciones = ["Local", "Provincial", "Comunidad Autonoma", "Nacional", "Ceuta y Melilla", "Baleares y Canarias","Europa","Resto del Mundo"];
    
    // Función para crear opciones
    function llenarDesplegable(elementoDesplegable, arrayOpciones) {
        arrayOpciones.forEach(opcion => {
            const opt = document.createElement('option');
            opt.value = opcion;
            opt.text = opcion;
            elementoDesplegable.appendChild(opt);
        });
    }
    
    // Obtener los elementos select del DOM
    let desplegable1 = document.querySelector("#desplegable1");
    let desplegable2 = document.querySelector("#desplegable2");
    
    // Rellenamos los select con las opciones del array
    llenarDesplegable(desplegable1, opciones);
    llenarDesplegable(desplegable2, opciones);
    
}
    