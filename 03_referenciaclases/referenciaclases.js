

// JS tiene varias clases 

// Date

var fechaActual = new Date();

var fechaConcreta = new Date(2021, 10, 20, 10, 10);

var fechaComoNumerico = Date.now();

var fechaDesdeISO = new Date(Date.parse("2021-08-10T10:20:01.111Z"));

// Desde UTC emplea como mes base 0 -> Enero = 0
var fechaDesdeUTC = new Date(Date.UTC(2018, 4, 10, 11, 25, 30));

console.log("%s", fechaActual);
console.log("%s", fechaDesdeISO);
console.log("%s", fechaDesdeUTC);

console.log ("%s-%s-%s",fechaActual.getDay(), fechaActual.getMonth(),fechaActual.getFullYear());

// REGEXP

var comprobarNif = new RegExp("^[0-9]{8}[A-Z]$","gim");

var comprobarCuenta = /^[A-Z]{2}\d{2}(-\d{4}){4}$/i;

var nif = "10202040A"

console.log("NIF: %s comprobacion correcta %s",nif,comprobarNif.test(nif));

var cuenta = "ES10-1010-1010-1010-1010";

console.log("Cuenta: %s comprobacion correcta %s",cuenta,comprobarCuenta.test(cuenta));

var cadenaConDatos = "1000;10101010A;German;Gonzalez;1998-10-10";

var leerYValidadDatos = /^(\d+);(\d{8}[A-Z]);([A-Za-z ]+);([A-Za-z áéíóú]+);(\d{4}-\d{2}-\d{2})$/;

var resultado = leerYValidadDatos.exec(cadenaConDatos);

if (resultado){
    for (var grupo in resultado){
        console.log(resultado[grupo]);
    }
    console.log("ID: %s, NIF: %s, Nombre: %s %s, Fecha: %s",
    resultado[1],resultado[2],resultado[3],resultado[4],resultado[5]);

}

// Math

var calculo = Math.log(1000) + Math.cos(Math.PI * 2);

console.log ("Calculo: %s", calculo);


