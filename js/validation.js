/**
 * Validación de los campos de attendance
 */

function validar(){
    //Nodos de los parametros a validar
    let nombre = document.getElementById("name");
    let correo = document.getElementById("email");
    let confirCorreo = document.getElementById("confirm");
    let tlf = document.getElementById("phone");
    let contraseña = document.getElementById("password");
    let sitio = document.getElementById("places");
    const check = document.getElementById("termsCheckbox");

    //Variable de confirmación
    let correcto = true;

    //No debe estar vacio
    if(nombre.value.length == 0){
        correcto = false;
        nombre.style.borderColor = "red";
        document.getElementById("errorNombre").style.visibility = "visible";
    }
    
    //Expresion regular para el correo
    const RegExCorreo= /^(\w+@hotmail\.com|\w+@gmail\.com)$/g;
    if(!RegExCorreo.test(correo.value)){
        correcto = false;
        correo.style.borderColor = "red";
        document.getElementById("errorCorreo").style.visibility = "visible";
    }

    //Debe ser igual que el anterior correo
    if(correo.value !== confirCorreo.value || confirCorreo.value.length == 0){
        correcto = false;
        confirCorreo.style.borderColor = "red";
        document.getElementById("errorConfirm").style.visibility = "visible";
    }

    //Compruebo que si es un numero, que si esta vacio y si esta en el rango
    if(isNaN(tlf.value) || !tlf.value || tlf.value > 999999999 || tlf.value < 111111111){
        correcto = false;
        tlf.style.borderColor = "red";
        document.getElementById("errorTlf").style.visibility = "visible";
    }

    //Expresión regular para la contraseña
    const RegExCont = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>]{8,}$/;
    if(!RegExCont.test(contraseña.value)){
        correcto = false;
        contraseña.style.borderColor = "red";
        document.getElementById("errorCont").style.visibility = "visible";
    }

    //Si no elige ninguna opción
    if(sitio.value == 0){
        correcto = false;
        sitio.style.borderColor = "red";
        document.getElementById("errorSelect").style.visibility = "visible";
    }

    //Comprobación del checkbox
    if(!check.checked){
        correcto = false;
        document.getElementById("errorCheck").style.visibility = "visible";
    }


    //Enviara el resultado, false si algo falla, true si todo esta bien
    return correcto;

}

//Cuando el usuario haga click en el input para volver a escribir desaparezcan los indicadores de error
function quitarError(nodo, id){
    nodo.style.borderColor="blue";
    document.getElementById(id).style.visibility="hidden";
}