function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Funciones Auxiliares

function estanCamposVacio(){
    let arr = ["nombre", "apellido", "password1", "password2", "email"];
    let noEstaVacio =true;
    let i = 0;
    while(noEstaVacio && i<arr.length){
        console.log(document.getElementById(arr[i]).value, arr[i])
       noEstaVacio = noEstaVacio && document.getElementById(arr[i]).value !== '';
       i++;
    }
    return noEstaVacio;
}

function largoDePass(){
    return document.getElementById('password1').value.length > 5;
}
function passwordIguales(){
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    return password1 == password2;
}

function aceptaTerminos(){
    return document.getElementById('terminos').checked
}   


function submit(){
    if( estanCamposVacio() && largoDePass() && passwordIguales() && aceptaTerminos()) {
        showAlertSuccess()
    } else showAlertError()
}
/*
Ningún campo puede estar vacío.
La contraseña debe tener al menos 6 caracteres.
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio."
*/