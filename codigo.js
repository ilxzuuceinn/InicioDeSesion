const usuarios = [];

function registrar() {
    let user = document.getElementById("nuevoUsuario").value;
    let contra = document.getElementById("nuevaContrasena").value;
    let mensaje = document.getElementById("mensaje");

    if (user === "" || contra === "") {
        mensaje.textContent = "¡Completa todos los campos!";
        mensaje.style.color = "red";
    } 

    let yaExiste = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === user) {
            yaExiste = true;
            break;
        }
    }

    if (yaExiste) {
        mensaje.textContent = "¡El nombre de usuario ya está registrado!";
        mensaje.style.color = "red";
    } else {
        usuarios.push({ 
            usuario: user, 
            contrasena: contra 
        });
        
        mensaje.textContent = "¡Registro exitoso!";
        mensaje.style.color = "purple";
    }
}


function iniciarSesion() {
    let user = document.getElementById("usuario").value;
    let contra = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");
    if (user === "" || contra === "") {
        mensaje.textContent = "¡Ingresa tu usuario y contraseña!";
        mensaje.style.color = "red";
    } 

    let opcionesValidas = false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === user && usuarios[i].contrasena === contra) {
            opcionesValidas = true;
            break;
        }
    }

    if (opcionesValidas) {
        mensaje.textContent = "¡Inicio de sesión exitoso!";
        mensaje.style.color = "purple";
    } else {
        mensaje.textContent = "¡Usuario o contraseña incorrectos!";
        mensaje.style.color = "red";
    }
}