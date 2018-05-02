if (localStorage.getItem("usernow")) {
    LibrosVer(1);
}else{
    window.location.href = "../administradores/index.html";
}

let libros = JSON.parse(localStorage.getItem("libros"));

function LibrosVer(pagina){
    let libros = JSON.parse(localStorage.getItem("libros"));
    let tabla_libro = "";
    let total_libros = libros.length;
    let inferior = (pagina * 10) - 10;
    let superior = pagina * 10;
    tabla_libro += "<tr class='table-list-title'>";
    tabla_libro += "<td>#</td>";
    tabla_libro += "<td>Titulo</td>";
    tabla_libro += "<td>Tema</td>";
    tabla_libro += "<td>Disponible</td>";
    tabla_libro += "<td>ubicacion</td>";
    tabla_libro += "<td>Operaciones</td>";
    tabla_libro += "</tr>";
    $.each(libros, function(indice, valor){
        if(indice >= inferior && indice < superior){
            tabla_libro += "<tr class='table-list-element'>";
            tabla_libro += "<td>"+libros[indice].libro_id+"</td>";
            tabla_libro += "<td id='titulo"+libros[indice]+"' class='table-list-text'>"+libros[indice].titulo+"</td>";
            tabla_libro += "<td id='tema"+libros[indice]+"' class='table-list-text'>"+libros[indice].tema+"</td>";
            tabla_libro += "<td id='disponible"+libros[indice]+"'class='table-list-text'>"+libros[indice].existencia+"</td>";
            tabla_libro += "<td id='ubicacion"+libros[indice]+"' class='table-list-text'>"+libros[indice].ubicacion+"</td>";
            tabla_libro += "<td><button class='round-blue' style='width: 68px; height: 32px; top: 50%; margin-top: 8px;' onclick='Prestar();'>Prestar</button></td>";
            tabla_libro += "</tr>";
        }
    });
    let funcion_anterior = (inferior > 0)?'onclick="LibrosVer('+(pagina-1)+');"':'';
    let boton_anterior = '<button class="square-blue"'+funcion_anterior+'>Anterior</button>';
    let funcion_siguiente = (superior < total_libros)?'onclick="LibrosVer('+(pagina+1)+');"':'';
    let boton_siguiente = '<button class="square-blue"'+funcion_siguiente+'>Siguiente</button>';
    $("#table-list").html(tabla_libro);
    $('.table-list-pages').html(boton_anterior+boton_siguiente);
}

$("#btn_buscar").on("click", function() {
    if ($(this).text() == "Buscar") {
        let libros = JSON.parse(localStorage.getItem("libros"));
        tabla_libro = "";
        filtro = $("#slc_buscar").val();
        buscar = ($('#txt_search').val()).toLowerCase();
        $.each(libros, function(indice, valor) {
            switch (filtro) {
                case "Libro":
                                if ((libros[indice].titulo).toLowerCase() == buscar) {
                                    tabla_libro += "<tr class='table-list-element'>";
                                    tabla_libro += "<td>"+libros[indice].libro_id+"</td>";
                                    tabla_libro += "<td id='titulo"+libros[indice]+"' class='table-list-text'>"+libros[indice].titulo+"</td>";
                                    tabla_libro += "<td id='tema"+libros[indice]+"' class='table-list-text'>"+libros[indice].tema+"</td>";
                                    tabla_libro += "<td id='disponible"+libros[indice]+"' class='table-list-text'>"+libros[indice].existencia+"</td>";
                                    tabla_libro += "<td id='ubicacion"+libros[indice]+"' class='table-list-text'>"+libros[indice].ubicacion+"</td>";
                                    tabla_libro += "<td><button class='round-blue' style='width: 68px; height: 32px; top: 50%; margin-top: 8px;' onclick='Prestar();'>Prestar</button></td>";
                                    tabla_libro += "</tr>";
                                }
                                break;
                case "Tema":
                                if ((libros[indice].tema).toLowerCase() == buscar) {
                                    tabla_libro += "<tr class='table-list-element'>";
                                    tabla_libro += "<td>"+libros[indice].libro_id+"</td>";
                                    tabla_libro += "<td id='titulo"+libros[indice]+"' class='table-list-text'>"+libros[indice].titulo+"</td>";
                                    tabla_libro += "<td id='tema"+libros[indice]+"' class='table-list-text'>"+libros[indice].tema+"</td>";
                                    tabla_libro += "<td id='disponible"+libros[indice]+"' class='table-list-text'>"+libros[indice].existencia+"</td>";
                                    tabla_libro += "<td id='ubicacion"+libros[indice]+"' class='table-list-text'>"+libros[indice].ubicacion+"</td>";
                                    tabla_libro += "<td><button class='round-blue' style='width: 68px; height: 32px; top: 50%; margin-top: 8px;' onclick='Prestar();'>Prestar</button></td>";
                                    tabla_libro += "</tr>";
                                }
                                break;
                case "Ubicacion":
                                if ((libros[indice].ubicacion).toLowerCase() == buscar) {
                                    tabla_libro += "<tr class='table-list-element'>";
                                    tabla_libro += "<td>"+libros[indice].libro_id+"</td>";
                                    tabla_libro += "<td id='titulo"+libros[indice]+"' class='table-list-text'>"+libros[indice].titulo+"</td>";
                                    tabla_libro += "<td id='tema"+libros[indice]+"' class='table-list-text'>"+libros[indice].tema+"</td>";
                                    tabla_libro += "<td id='disponible"+libros[indice]+"' class='table-list-text'>"+libros[indice].existencia+"</td>";
                                    tabla_libro += "<td id='ubicacion"+libros[indice]+"' class='table-list-text'>"+libros[indice].ubicacion+"</td>";
                                    tabla_libro += "<td><button class='round-blue' style='width: 68px; height: 32px; top: 50%; margin-top: 8px;' onclick='Prestar();'>Prestar</button></td>";
                                    tabla_libro += "</tr>";
                                }
                                break;
            }
        });
        $("#table-list").html(tabla_libro);
        $(this).text("Volver");
    }else if ($(this).text() == "Volver"){
        LibrosVer(1);
        $(this).text("Buscar");
    }
});


function Prestar() {
    var fecha = new Date;
    let dia = ((fecha.getDate() + 7) > 30)?fecha.getDate() - 30:'';
    let libros = $(this).prev().prev().prev().prev().prev().text();
    let titulo, autor, tema, ubicacion, disponible;
        libros.forEach(function(index) {
            ///if (libros[index].libro_id == )
        });
    $(".buttons-nav").append("<div class='pop-prestar'><table><tr class='table-list-title'><td>Clasificacion</td><td>Libro</td></tr><tr class='table-list-element'><td class='table-list-text'>Libro</td><td class='table-list-text'>dasdsadsa</td></tr><tr class='table-list-element'><td class='table-list-text'>Autor</td><td class='table-list-text'></td></tr><tr class='table-list-element'><td class='table-list-text'>Tema</td><td class='table-list-text'></td></tr><tr class='table-list-element'><td class='table-list-text'>Ubicacion</td><td class='table-list-text'></td></tr><tr class='table-list-element'><td class='table-list-text'>Disponibles</td><td class='table-list-text'></td></tr><tr class='table-list-element'><td class='table-list-text'>Fecha de prestamo</td><td class='table-list-text'>"+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+"</td></tr><tr class='table-list-element'><td class='table-list-text'>Fecha devolucion</td><td class='table-list-text'>"+((dia == '')?fecha.getDate()+7:dia)+"/"+((dia == '')?fecha.getMonth()+1:fecha.getMonth()+2)+"/"+fecha.getFullYear()+"</td></tr></table></div>");
}