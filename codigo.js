function registrar() {

    let usuario = document.getElementById("nuevoUsuario").value;
    let contrasena = document.getElementById("nuevaContrasena").value;

    let mensaje = document.getElementById("mensaje");

    if (usuario == "" || contrasena == "") {

        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";

    } else {

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contrasena", contrasena);
        mensaje.textContent = "¡Registro exitoso!";
        mensaje.style.color = "purple";
        setTimeout(function() {
            location.href = "index.html";
        }, 1000);
    }
}


function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");
    let usuarioRegistrado = localStorage.getItem("usuario");
    let contrasenaRegistrada = localStorage.getItem("contrasena");
    if (usuario == "" || contrasena == "") {
        mensaje.textContent = "Ingresa tu usuario y contraseña";
        mensaje.style.color = "red";
    } 
   
    else if (usuario == usuarioRegistrado && contrasena == contrasenaRegistrada) {
        mensaje.textContent = "¡Inicio de sesión exitoso!";
        mensaje.style.color = "purple";
        setTimeout(function() {
            location.href = "bienvenido.html";
        }, 1000);
    } 

    else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
}