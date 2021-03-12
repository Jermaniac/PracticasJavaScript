
// referenciamos al navegador con window
// document representa la ventana del navegador, la pagina actual
// obtenemos el elementos por id que se ha declarado en un div con id="datos"
var divDatos = window.document.getElementById("datos");
// podemos incorporar contenido dinamico, con .innerHTML le puedo asignar un contenido,
// ESTO GENERA DEMASIADO CODIGO
divDatos.innerHTML = 
    "<ul class='list-group col-12'>"+
        "<li class='list-group-item'>ScreenLeft: " + window.screenLeft + "</li>"+
        "<li class='list-group-item'>ScreenTop: " + window.screenTop + "</li>"+
        "<li class='list-group-item'>ScreenX: " + window.screenX + "</li>"+
        "<li class='list-group-item'>ScreenY: " + window.screenY + "</li>"+
        "<li class='list-group-item'>Ancho: " + window.innerWidth + "</li>"+
        "<li class='list-group-item'>Alto: " + window.innerHeight + "</li>"+
    "</ul>";

// Mover ventana

// Posicion absoluta
window.moveTo(200,100);
//Posicion relativa
window.moveBy(50,50);

// window es la variable por defecto dentro de un navegador (si no lo ponemos, lo pone auto)

// Con esto seleccionamos el elemento "boton1"
var boton1 = document.querySelector("#boton1");

// No me sugiere onclick (porque no sabe que es un boton),
// pero en tiempo de ejecucion si lo utilizara,en caso de duda revisar que tengo disponible en el html
// Le asignamos un evento a este boton, en este caso navega a otra pagina
boton1.onclick = function(evento){

    var ventana = window.open("../06_matrices/index.html", "topFrame",
    "menubar=no,resizable=no,toolbar=no,status=no");
    // En el caso de que no se pueda construir esa ventana, sacamos un mensaje
    if(!ventana){
        alert("Tienes activo el bloqueo de popups.");
    }
    // En el caso de que si se pueda construir, la podemos mover y modificar la ventana que se abre
    else{
        ventana.moveTo(0,0);
        ventana.resizeTo(800,600);
    }

};

// Ahora incorporamos funcion al segundo boton, primero lo buscamos
var boton2 = document.querySelector("#boton2");

// esta es otra forma de darle funcion
boton2.addEventListener("click",
    function(target){

        console.log(target);

        var ventana = window.open("../06_matrices/index.html", "topFrame",
        "fullscreen=yes");
        // En el caso de que no se pueda construir esa ventana, sacamos un mensaje
        if(!ventana){
            alert("Tienes activo el bloqueo de popups.");
        }

    }
);

// Vamos con el boton3, lo buscamos
var boton3 = document.querySelector("#boton3");

var idIntervalReloj;

var divReloj = document.querySelector("div#reloj");

boton3.onclick = function(evento){
    if (!idIntervalReloj){

        idIntervalReloj = setInterval(
            function(){
                // innerHTML cambia todo
                // innerText cambia el texto
               divReloj.innerHTML = "<span class='badge badge-primary badge-pill'>" + new Date() + "</span>"
            },
            1000
        );
    }
};

// Vamos con el boton4 para quitar ese reloj, lo buscamos
var boton4 = document.querySelector("#boton4");

boton4.onclick = function(evento){
    if (idIntervalReloj){
        // Con clearInterval limpiamos el intervalo y el reloj para de actualizar el div
        clearInterval(idIntervalReloj);
        // Para eliminar la linea html que muestra el reloj, simplente ponemos un html vacio
        divReloj.innerHTML="";
    }
};