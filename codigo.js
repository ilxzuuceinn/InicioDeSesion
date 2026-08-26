function registrar() {
    let usuario = document.getElementById("nuevoUsuario").value;
    let contrasena = document.getElementById("nuevaContrasena").value;
    let mensaje = document.getElementById("mensaje");
    
    
    if (usuario == "" || contrasena == "") {
        mensaje.textContent = "¡Completa todo!";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Registro exitoso!";
        mensaje.style.color = "purple";
    }
}


function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");
    if (usuario == "" || contrasena == "") {
        mensaje.textContent = "¡Ingresa tu usuario y contraseña!";
        mensaje.style.color = "red";
    } 
   
    else if (usuario == usuarioRegistrado && contrasena == contrasenaRegistrada) {
        mensaje.textContent = "¡Inicio de sesión exitoso!";
        mensaje.style.color = "purple";
    } 

    else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
}