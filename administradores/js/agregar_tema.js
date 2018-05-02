$(document).ready(function(){
    if (localStorage.getItem("usernow") == null) {
        window.location.href = "login.html";
    }
    var nueva_fecha = new Date();
    $('#txt_fecha_tema').val(nueva_fecha.getDate()+'/'+(nueva_fecha.getMonth()+1)+'/'+nueva_fecha.getFullYear());
});
//FUNCION ENCARGADA DE AGREGAR LOS TEMAS A LA TABLA LIBRO
function TemasAgregar(){
    let nuevo_tema = $("#txt_nuevo_tema").val();
    let fecha_ingreso =  $('#txt_fecha_tema').val();
    
    if(nuevo_tema == ""){
        alert("Ingresa un tema");
        return false;
    }
    if(fecha_ingreso == ""){
        alert("La fecha no puede estar vacia");
        return false;
    }
    if(localStorage.getItem("temas")){
        let temas = JSON.parse(localStorage.getItem("temas"));
        let tema ={
            tema_id: temas.length,
            nombre_tema: nuevo_tema,
            fecha_ingreso: fecha_ingreso
        };
        temas.push(tema);
        localStorage.setItem("temas", JSON.stringify(temas));
        alert('Tema Registrado!');
            $('#txt_nuevo_tema').focus();
            $('#txt_nuevo_tema').val('');
    }else{
        var temas = new Array();

        let tema = {
            tema_id: temas.length,
            nombre_tema: nuevo_tema,
            fecha_ingreso: fecha_ingreso
        };
        temas.push(tema);
        localStorage.setItem("temas", JSON.stringify(temas));
        alert('Tema Registrado!');
            $('#txt_nuevo_tema').focus();
            $('#txt_nuevo_tema').val('');
    }
    function SesionCerrar(){
        logedin = false;
        localStorage.removeItem('usernow');
        window.location.href = "login.html";
    }
}