$(document).ready(function(){
    if (localStorage.getItem("usernow")) {
        LibrosVer(1);
    }else{
        window.location.href = "login.html";
    }

    $("#btn_logout").on('click',function(){
        localStorage.removeItem("usernow");
        window.location.href = "login.html";
    });
});

function LibrosVer(pagina){
    let libros = JSON.parse(localStorage.getItem("libros"));
    let tabla_libro = "";
    let total_libros = libros.length;
    let inferior = (pagina * 10) - 10;
    let superior = pagina * 10;
    tabla_libro += "<tr>";
    tabla_libro += "<td>#</td>";
    tabla_libro += "<td>Titulo</td>";
    tabla_libro += "<td>Tema</td>";
    tabla_libro += "<td>existencia</td>";
    tabla_libro += "<td>ubicacion</td>";
    tabla_libro += "<td>Operaciones</td>";
    tabla_libro += "</tr>";
    $.each(libros, function(indice, valor){
        if(indice >= inferior && indice < superior){
            tabla_libro += "<tr>";
            tabla_libro += "<td>"+libros[indice].libro_id+"</td>";
            tabla_libro += "<td>"+libros[indice].titulo+"</td>";
            tabla_libro += "<td>"+libros[indice].tema+"</td>";
            tabla_libro += "<td>"+libros[indice].existencia+"</td>";
            tabla_libro += "<td>"+libros[indice].ubicacion+"</td>";
            tabla_libro += "<td><button class='button-link'>Editar</button><button class='button-link'>Eliminar</button></td>";
            tabla_libro += "</tr>";
        }
    });
    let funcion_anterior = (inferior > 0)?'onclick="LibrosVer('+(pagina-1)+');"':'';
    let boton_anterior = '<button class="square-blue"'+funcion_anterior+'>Anterior</button>';
    let funcion_siguiente = (superior < total_libros)?'onclick="LibrosVer('+(pagina+1)+');"':'';
    let boton_siguiente = '<button class="square-blue"'+funcion_siguiente+'>Siguiente</button>';
    $("#tbl_tabla_libros").html(tabla_libro);
    $('.list-block-footer').html(boton_anterior+boton_siguiente);
}