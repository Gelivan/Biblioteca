$(document).ready(function(){
    if (localStorage.getItem("usernow")) {
        AutoresVer(1);
    }else{
        window.location.href = "login.html";
    }

    $("#btn_logout").on('click',function(){
        localStorage.removeItem("usernow");
        window.location.href = "login.html";
    });
});

function AutoresVer(pagina){
    let autores = JSON.parse(localStorage.getItem("autores"));
    let tabla_autor = "";
    let total_autores = autores.length;
    let inferior = (pagina * 10) - 10;
    let superior = pagina * 10;
    tabla_autor += "<tr>";
    tabla_autor += "<td>#</td>";
    tabla_autor += "<td>Nombres</td>";
    tabla_autor += "<td>Apellidos</td>";
    tabla_autor += "<td>Nacionalidad</td>";
    tabla_autor += "<td>Fecha de ingreso</td>";
    tabla_autor += "<td>Operaciones</td>";
    tabla_autor += "</tr>";
    $.each(autores, function(indice, valor){
        if(indice >= inferior && indice < superior){
            tabla_autor += "<tr>";
            tabla_autor += "<td>"+autores[indice].autor_id+"</td>";
            tabla_autor += "<td>"+autores[indice].nombre_autor+"</td>";
            tabla_autor += "<td>"+autores[indice].apellido_autor+"</td>";
            tabla_autor += "<td>"+autores[indice].nacionalidad+"</td>";
            tabla_autor += "<td>"+autores[indice].fecha_ingreso+"</td>";
            tabla_autor += "<td><button class='button-link'>Editar</button><button class='button-link'>Eliminar</button></td>";
            tabla_autor += "</tr>";
        }
    });
    let funcion_anterior = (inferior > 0)?'onclick="AutoresVer('+(pagina-1)+');"':'';
    let boton_anterior = '<button class="square-blue"'+funcion_anterior+'>Anterior</button>';
    let funcion_siguiente = (superior < total_autores)?'onclick="AutoresVer('+(pagina+1)+');"':'';
    let boton_siguiente = '<button class="square-blue"'+funcion_siguiente+'>Siguiente</button>';
    $("#tbl_tabla_autor").html(tabla_autor);
    $('.list-block-footer').html(boton_anterior+boton_siguiente);

}