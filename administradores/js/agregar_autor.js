$(document).ready(function () {

    if (localStorage.getItem("usernow") == null) {
        window.location.href = "login.html";
    }
    var nueva_fecha = new Date();
    $('#txt_fecha_autor').val(nueva_fecha.getDate() + '/' + (nueva_fecha.getMonth() + 1) + '/' + nueva_fecha.getFullYear());
});

let paises = ["Afganistán", "Akrotiri", "Albania", "Alemania", "Andorra", "Angola", "Anguila", "Antártida", "Antigua y Barbuda", "Antillas Neerlandesas", "Arabia Saudí", "Arctic Ocean", "Argelia", "Argentina", "Armenia", "Aruba", "Ashmore andCartier Islands", "Atlantic Ocean", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bahráin", "Bangladesh", "Barbados", "Bélgica", "Belice", "Benín", "Bermudas", "Bielorrusia", "Birmania Myanmar", "Bolivia", "Bosnia y Hercegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", "Clipperton Island", "Colombia", "Comoras", "Congo", "Coral Sea Islands", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dhekelia", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "El Vaticano", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Gaza Strip", "Georgia", "Ghana", "Gibraltar", "Granada", "Grecia", "Groenlandia", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Ecuatorial", "Guinea-Bissau", "Guyana", "Haití", "Honduras", "Hong Kong", "Hungría", "India", "Indian Ocean", "Indonesia", "Irán", "Iraq", "Irlanda", "Isla Bouvet", "Isla Christmas", "Isla Norfolk", "Islandia", "Islas Caimán", "Islas Cocos", "Islas Cook", "Islas Feroe", "Islas Georgia del Sur y Sandwich del Sur", "Islas Heard y McDonald", "Islas Malvinas", "Islas Marianas del Norte", "IslasMarshall", "Islas Pitcairn", "Islas Salomón", "Islas Turcas y Caicos", "Islas Vírgenes Americanas", "Islas Vírgenes Británicas", "Israel", "Italia", "Jamaica", "Jan Mayen", "Japón", "Jersey", "Jordania", "Kazajistán", "Kenia", "Kirguizistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macao", "Macedonia", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Man, Isle of", "Marruecos", "Mauricio", "Mauritania", "Mayotte", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montserrat", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Nicaragua", "Níger", "Nigeria", "Niue", "Noruega", "Nueva Caledonia", "Nueva Zelanda", "Omán", "Pacific Ocean", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa-Nueva Guinea", "Paracel Islands", "Paraguay", "Perú", "Polinesia Francesa", "Polonia", "Portugal", "Puerto Rico", "Qatar", "Reino Unido", "República Centroafricana", "República Checa", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Sáhara Occidental", "Samoa", "Samoa Americana", "San Cristóbal y Nieves", "San Marino", "San Pedro y Miquelón", "San Vicente y las Granadinas", "Santa Helena", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Southern Ocean", "Spratly Islands", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Suecia", "Suiza", "Surinam", "Svalbard y Jan Mayen", "Tailandia", "Taiwán", "Tanzania", "Tayikistán", "TerritorioBritánicodel Océano Indico", "Territorios Australes Franceses", "Timor Oriental", "Togo", "Tokelau", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Unión Europea", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Wake Island", "Wallis y Futuna", "West Bank", "World", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

function PaisesVer() {
    let pais_html = "";
    $.each(paises, function (indice, valor) {
        pais_html += '<option>' + valor + '</option>';
    });
    $('#slc_nacionalidad').html(pais_html);
}
PaisesVer();

function AutoresAgregar() {
    let nombre_autor = $("#txt_autor_nombre").val();
    let apellido_autor = $("#txt_autor_apellido").val();
    let nacionalidad = $("#slc_nacionalidad").val();
    let nacimiento_autor = $("#txt_nac_autor").val();
    let fallecimiento_autor = $("#txt_fallecimiento_autor").val();
    let fecha_ingreso = $('#txt_fecha_autor').val();

    if (nombre_autor == "") {
        alert("Ingresa los nombres del autor");
        return false;
    }
    if (apellido_autor == "") {
        alert("Ingresa los apellidos del autor");
        return false;
    }
    if (nacionalidad == "") {
        alert("Ingresa la nacionalidad del autor");
        return false;
    }
    if (nacimiento_autor == "") {
        alert("Ingresa la fecha de nacimiento del autor");
        return false;
    }
    if (fallecimiento_autor.length > 0) {
        if (fallecimiento_autor == "") {
            alert("Ingresa la fecha de fallecimiento del autor");
            return false;
        }
    }
    if (fecha_ingreso == "") {
        alert("Ingresa la fecha de ingreso");
        return false;
    }

    if (localStorage.getItem("autores")) {
        let autores = JSON.parse(localStorage.getItem("autores"));
        let autor = {
            autor_id: autores.length,
            nombre_autor: nombre_autor,
            apellido_autor: apellido_autor,
            nacionalidad: nacionalidad,
            fecha_nac: nacimiento_autor,
            fallecimiento: fallecimiento_autor,
            fecha_ingreso: fecha_ingreso
        };
        autores.push(autor);
        localStorage.setItem("autores", JSON.stringify(autores));
        alert('Autor Registrado!');
        $('#txt_autor_nombre').focus();
        $('#txt_autor_nombre').val('');
        $('#txt_autor_apellido').val('');
        $('#txt_nac_autor').val('');
        $('#txt_fallecimiento_autor').val('');
    } else {
        let autores = new Array();
        let autor = {
            autor_id: autores.length,
            nombre_autor: nombre_autor,
            apellido_autor: apellido_autor,
            nacionalidad: nacionalidad,
            fecha_nac: nacimiento_autor,
            fallecimiento: fallecimiento_autor,
            fecha_ingreso: fecha_ingreso
        };
        autores.push(autor);
        localStorage.setItem("autores", JSON.stringify(autores));
        alert('Autor Registrado!');
        $('#txt_autor_nombre').focus();
        $('#txt_autor_nombre').val('');
        $('#txt_autor_apellido').val('');
        $('#txt_nac_autor').val('');
        $('#txt_fallecimiento_autor').val('');
    }
}