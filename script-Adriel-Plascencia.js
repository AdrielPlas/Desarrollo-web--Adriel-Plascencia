function enviarDatos() {
    // Capturar datos del formulario
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;
    //Guardar como objeto
    var datos = {
        edad : edad,
        sexo: sexo,
        educacion: educacion,
        ocupacion : ocupacion
    };
    //Guararlo en el localStorage
    localStorage.setItem('datosFormulario', JSON.stringify(datos))
}
//obtener localStorage
var datosFormulario = localStorage.getItem('datosFormulario');
if (datosFormulario) {
    // Convertir la cadena JSON a un objeto
    var datos = JSON.parse(datosFormulario);

    // Mostrar los datos en la página
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '<p class="caja">Edad: ' + datos.edad + '</p>';
    resultadosDiv.innerHTML += '<p class="caja">Sexo: ' + datos.sexo + '</p>';
    resultadosDiv.innerHTML += '<p class="caja">Educacion: ' + datos.educacion + '</p>';
    resultadosDiv.innerHTML += '<p class="caja">Ocupacion: ' + datos.ocupacion + '</p>';
} 
