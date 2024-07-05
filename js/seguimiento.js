window.onload = () => {

    let seguimiento = document.querySelector("#seguimiento");
    seguimiento.addEventListener("input",validarSeguimiento)
    
    
    function validarSeguimiento() {
        let seguimiento = document.querySelector("#seguimiento").value;
        let msnError = document.querySelector(".seguimientoError");

        if (seguimiento.length !== 10 || !seguimiento.startsWith("USP")) {
            msnError.textContent = "El numero debe comenzar por USP y debe tener 10 números";
            return false;
        } else {
            msnError.textContent = "";
            return true;
        }
    }

    function validarFormulario(){
        if (validarSeguimiento){
            return true;
        }
        else{
            return false;
        }
    }


}