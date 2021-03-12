
// Si tenemos atributo name en el formulario y el elemento
// podemos acceder por nombre

var hayErrorEnNif = false;
var hayAlgunError = false;

var altas = [];

document.forms.cliente.nif.onblur = function (ev){

    var valor = ev.target.value;

    var spanNif = document.querySelector("input#nif + span");

    if(!/^\d{8}[A-Z]$/.test(valor)){
        spanNif.setAttribute("class","alert alert-danger");
        spanNif.innerText = "NIF incorrecto";
        hayErrorEnNif = true;
    }
    else{
        spanNif.setAttribute("class","");
        spanNif.innerText = "";
        hayErrorEnNif = false;
    }
}

// Podemos interceptar el proceso de envio por submit

document.forms.cliente.onsubmit = function(ev){

    hayAlgunError = hayErrorEnNif;

    if (hayAlgunError){
        alert("Todavia hay errores en el nif");
        return false;
    }
    else{
        return true;
    }
}

var btnNoSubmit = document.querySelector("#btnnosubmit");
btnNoSubmit.onclick = function(ev){
    // creamos una variable cliente con los campos que tenemos en el formulario
    var cliente = {
        // de esta forma capturamos los datos introducido en el formulario
        nif : document.forms.cliente.nif.value,
        nombre : document.forms.cliente.nombre.value,
        apellidos : document.forms.cliente.apellidos.value,
        usuario : document.forms.cliente.usuario.value,
        clave : document.forms.cliente.clave.value,
        // como es una checkbox le ponemos checked
        noticias : document.forms.cliente.noticias.checked,
        condiciones : document.forms.cliente.condiciones.checked,
        nivel : document.forms.cliente.nivel.value,
        comentarios : document.forms.cliente.comentarios.value,
        medioDePago : document.forms.cliente.medioDePago.value //?
    };
    // lo mostramos en la consola para poder ver que objeto cliente se ha capturado
    console.log(cliente);
    // lo metemos en la matriz para simular los clientes dados de alta
    altas.push(cliente);
    // sacamos un mensaje por alert para ver si se ha tenido exito
    //alert("Cliente almacenado");
    // NOTA: como lo hemos enviado por NO SUBMIT los datos se quedan en las cajas de texto
    // Realizamos un metodo para mostrar una tabla con los datos del ultimo cliente introducido
    actualizarTabla();
}

// metodo para realizar una tabla que incluya a todos los clientes introducidos
function actualizarTabla (){
    // En este caso podemos hacer esto porque solo tenemos una tabla y un tag tbody
    // var tBody = document.querySelector("tbody");

    // Lo ideal es ponerle un identificador para que sea mas estable
    var tBody = document.querySelector("tbody#tablaclientes");

    var filas = "";

    for(var indice in altas){

        var cliente = altas[indice];

        filas += "<tr>" +
                    "<td>" + cliente.nif + "</td>"+
                    "<td>" + cliente.nombre + "</td>"+
                    "<td>" + cliente.usuario + "</td>"+
                    "<td>" + cliente.clave + "</td>"+
                    "<td>" + cliente.medioDePago + "</td>"+
                    "<td>" + cliente.nivel + "</td>"+
                "</tr>";
    }
    tBody.innerHTML = filas;

}