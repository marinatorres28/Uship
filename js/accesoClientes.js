let form=document.querySelector("#formularioAcceso");

form.usuario.addEventListener("input", validarUsuario);
form.pass.addEventListener("input", validarPass);

function validarAcceso(){
    if (validarUsuario() && validarPass()) {
        return true;
    } else {
        return false;
    }
}

function validarUsuario(){
    let usuario = document.querySelector("#usuario");
    let msnError = document.querySelector(".usuarioError");

    if (!usuario.value.trim()){
        msnError.textContent="El usuario es obligatorio";
        return false;
    }
    else{
        msnError.textContent="";
        return true;
    }

}

function validarPass(){
    let pass = document.querySelector("#pass")
    let msnError = document.querySelector(".passError");

    if (!pass.value.trim()){
        msnError.textContent="La contraseña es obligatoria";
        return false;
    }

    else{
        msnError.textContent="";
        return true;
    }

}