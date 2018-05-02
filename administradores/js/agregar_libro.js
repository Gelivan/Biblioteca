$(document).ready(function(){
    if (localStorage.getItem("usernow") == null) {
        window.location.href = "login.html";
    }
    var nueva_fecha = new Date();
    $('#txt_fecha_libro').val(nueva_fecha.getDate()+'/'+(nueva_fecha.getMonth()+1)+'/'+nueva_fecha.getFullYear());
});

function AutoresLista(){
    let autores = JSON.parse(localStorage.getItem("autores"));
    let autores_html = "";
    $.each(autores, function(indice, valor){
        autores_html += "<option>"+autores[indice].nombre_autor+"</option>";
    });
    $("#slc_autor").html(autores_html);
}
AutoresLista();

function TemasLista(){
    let temas = JSON.parse(localStorage.getItem("temas"));
    let temas_html = "";
    $.each(temas, function(indice, valor){
        temas_html += "<option>"+temas[indice].nombre_tema+"</option>";
    });
    $("#slc_tema").html(temas_html);
}
TemasLista();

function LibrosAgregar(){
    let titulo = $("#txt_titulo_libro").val();
    let autor = $("#txt_autor_libro").val();
    let tema = $("#slc_tema").val();
    let existencia = $("#txt_existencia").val();
    let ubicacion = $("#txt_ubicacion").val();
    let fecha_ingreso = $("#txt_fecha_libro").val();
    
    if(titulo == ""){
        alert("Ingrese el titulo del libro");
        return false;
    }
    if(autor == ""){
        alert("Ingrese el autor del libro");
        return false;
    }
    if(tema == ""){
        alert("Ingrese el tema del libro");
        return false;
    }
    if(existencia == ""){
        alert("Ingrese la cantidad disponible");
        return false;
    }
    if(ubicacion == ""){
        alert("Ingrese la ubicacion del libro");
        return false;
    }
    if(fecha_ingreso == ""){
        alert("Ingrese la fecha de ingreso");
        return false;
    }

    if (localStorage.getItem("libros")) {
        let libros = JSON.parse(localStorage.getItem("libros"));
        let libro = {libro_id: libros.length, titulo: titulo, autor: autor, tema: tema, existencia: existencia, ubicacion: ubicacion, fecha_ingreso: fecha_ingreso};

        libros.push(libro);

        localStorage.setItem("libros",JSON.stringify(libros));

        alert("registrado correctamente");
    }else{
        let libros = [];

        let libro = {libro_id: libros.length, titulo: titulo, autor: autor, tema: tema, existencia: existencia, ubicacion: ubicacion, fecha_ingreso: fecha_ingreso};

        libros.push(libro);

        localStorage.setItem("libros",JSON.stringify(libros));

        alert("Registrado correctamente");
    }


    function SesionCerrar(){
        logedin = false;
        localStorage.removeItem('usernow');
        window.location.href = "login.html";
    }
}