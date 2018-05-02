$(document).ready(function(){
    if (localStorage.getItem("usernow")) {
        TemasVer(1);
    }else{
        window.location.href = "login.html";
    }



    $("#btn_logout").on('click',function(){
        localStorage.removeItem("usernow");
        window.location.href = "login.html";
    });
});

function TemasVer(pagina){
    let temas = JSON.parse(localStorage.getItem("temas"));
    let tabla_tema = "";
    let total_temas = temas.length;
    let inferior = (pagina * 10) - 10;
    let superior = pagina * 10;
    tabla_tema += "<tr>";
            tabla_tema += "<td><strong>#</strong></td>";
            tabla_tema += "<td><strong>Tema</strong></td>";
            tabla_tema += "<td><strong>Fecha de ingreso</strong></td>";
            tabla_tema += "<td><strong>Operaciones</strong></td>";
            tabla_tema += "</tr>";
    $.each(temas, function(indice, valor){
        if(indice >= inferior && indice < superior){
            tabla_tema += "<tr>";
            tabla_tema += "<td>"+temas[indice].tema_id+"</td>";
            tabla_tema += "<td>"+temas[indice].nombre_tema+"</td>";
            tabla_tema += "<td>"+temas[indice].fecha_ingreso+"</td>";
            tabla_tema += "<td><button class='button-link'>Editar</button><button class='button-link'>Eliminar</button></td>";
            tabla_tema += "</tr>";
        }
    });
    //BOTONES DE NAVEGACION PARA LAS DIFERENTES PESTANIAS
    let funcion_anterior = (inferior > 0)?'onclick="TemasVer('+(pagina-1)+');"':'';
    let boton_anterior = '<button class="square-blue" '+funcion_anterior+'>Anterior</button>';
    let funcion_siguiente = (superior < total_temas)?'onclick="TemasVer('+(pagina+1)+');"':'';
    let boton_siguiente = '<button class="square-blue" '+funcion_siguiente+'>Siguiente</button>';
    $("#tbl_tabla_temas").html(tabla_tema);
    $('.list-block-footer').html(boton_anterior+boton_siguiente);
}
