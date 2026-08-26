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

        mensaje.textContent = "Usuario creado correctamente";
        mensaje.style.color = "green";

        setTimeout(function() {
            location.href = "login.html";
        }, 1000);
    }
}


function iniciarSesion() {

    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    let usuarioGuardado = localStorage.getItem("usuario");
    let contrasenaGuardada = localStorage.getItem("contrasena");

    let mensaje = document.getElementById("mensaje");

    if (usuario == usuarioGuardado &&
        contrasena == contrasenaGuardada) {

        location.href = "pagina.html";

    } else {

        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
}