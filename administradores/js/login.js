let administradores = (localStorage.getItem("administradores") == null)?[]:JSON.parse(localStorage.getItem("administradores"));
let usuarios = (localStorage.getItem("usuarios") == null)?[]:JSON.parse(localStorage.getItem("usuarios"));


function Validarlogin() {
    let correo = $("#log_correo").val();
    let contra = $("#log_contra").val();

    for (var i = 0; i < administradores.length; i++) {
        
        if (administradores[i].correo == correo && administradores[i].contra == contra) {
            localStorage.setItem("usernow", administradores[i].administradores_id);
            window.location.href = "libros.html";
            break;
            return false;
        }
    }

    for (var i = 0; i < usuarios.length; i++) {
        
        if (usuarios[i].correo == correo && usuarios[i].contra == contra) {
            localStorage.setItem("usernow", usuarios[i].usuarios_id);
            window.location.href = "../usuarios/libros.html";
            break;
            return false;
        }
    }

}