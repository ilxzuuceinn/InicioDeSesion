function registrar() {

    let user = document.getElementById("nuevoUsuario").value;
    let contra = document.getElementById("nuevaContrasena").value;

    let mensaje = document.getElementById("mensaje");

    if (user == "" || contra == "") {

        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";

    } else {

        localStorage.setItem("usuario", user);
        localStorage.setItem("contrasena", contra);

        mensaje.textContent = "¡Registro exitoso!";
        mensaje.style.color = "purple";

        setTimeout(function() {
            location.href = "index.html";
        }, 1000);
    }
}


function iniciarSesion() {

    let user = document.getElementById("user").value;
    let contra = document.getElementById("contra").value;

    let mensaje = document.getElementById("mensaje");

    
    let usuarioRegistrado = localStorage.getItem("user");
    let contrasenaRegistrada = localStorage.getItem("contra");

    if (user == "" || contra == "") {

        mensaje.textContent = "Ingresa tu usuario y contraseña";
        mensaje.style.color = "purple";

    } 
   
    else if (user == usuarioRegistrado && contra == contrasenaRegistrada) {

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