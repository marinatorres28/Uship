
    let form = document.querySelector("#formularioContacto");

    form.nombre.addEventListener("input", validarNombre);
    form.email.addEventListener("input", validarEmail);

    function validarFormulario(){
        if (validarNombre() && validarEmail()) {
            return true;
        } else {
            return false;
        }
    }

    function validarNombre() {
        let nombre = document.querySelector("#nombre");
        let msnError = document.querySelector(".nombreError");

        if (!nombre.value.trim()) {
            msnError.textContent="El nombre es obligatorio";
            return false;
        }

        else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
            msnError.textContent="El nombre solo puede contener letras";
            return false;
        }

        else {
            msnError.textContent="";
            return true;
        }

    }

    function validarEmail() {
        let email = document.querySelector("#email");
        let msnError = document.querySelector(".emailError");
        

        if (!email.value.trim()) {
            msnError.textContent="El email es obligatorio"
            return false;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
            msnError.textContent="El formato del email es incorrecto"
            return false;
        }
        else {
            msnError.textContent="";
            return true;
        }

    }
