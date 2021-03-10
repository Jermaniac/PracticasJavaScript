
console.log("Codigo ejecutado en basico.js");

/*
    Tipos de datos
*/

// Numericos

var variableEntera = 10;
var numeroDecimal = 20.5;

// Booleanos

var hayClientes = true;

console.log("Entero: %s - Decimal: %s - Booleano: %s", variableEntera, numeroDecimal, hayClientes);

// Cadenas

var mensaje = "Cadena de texto con comillas dobles";
var otroMensaje = "Cadena de texto con comillas simples";
var noHaceFaltaUsarEscape = '"Entrecomillado"';

// Objetos

var refObjeto = new Object();
// Le asigno una propiedad en tiempo de ejecucion a un objeto
refObjeto.nombre = "Juan";
refObjeto.domicilio = "C/ Serrano 83";

var otroObjeto ={};
otroObjeto.contador = 1;
otroObjeto.dimensiones = {};
otroObjeto.configurado = true;
otroObjeto.dimensiones.ancho = 10;
otroObjeto.dimensiones.alto = 10;

// var ojetoInicializado ={
//     contador : 1,
//     dimensiones = {
//         ancho : 10,
//         alto : 10
//     },
//     configurado :true
// };

// Variables undefined (sin definir)

var variableUndefined;

// Funciones

function mostrarFecha(){
    console.log(new Date().toISOString());
}

// Asignamos una funcion con nombre a una variable
var unaFuncion = mostrarFecha;

// Asignamos una funcion anonima a una variable
var otraFuncion = function(){
    console.log(new Date().toUTCString());
}

// Mostramos los valores y tipos de las variables

console.log("Variable '%s' tiene valor %s y tipo %s", 'numeroDecimal', numeroDecimal, typeof(numeroDecimal));
console.log("Variable '%s' tiene valor %s y tipo %s", 'variableEntera', variableEntera, typeof(variableEntera));
console.log("Variable '%s' tiene valor %s y tipo %s", 'hayClientes', hayClientes, typeof(hayClientes));
console.log("Variable '%s' tiene valor %s y tipo %s", 'mensaje', mensaje, typeof(mensaje));

// console.log("Variable '%s' tiene valor %s y tipo %s", 'ojetoInicializado', ojetoInicializado, typeof(ojetoInicializado));

console.log("Variable '%s' tiene valor %s y tipo %s", 'variableUndefined', variableUndefined, typeof(variableUndefined));

console.log("Variable '%s' tiene valor %s y tipo %s", 'unaFuncion', unaFuncion, typeof(unaFuncion));
console.log("Variable '%s' tiene valor %s y tipo %s", 'otraFuncion', otraFuncion, typeof(otraFuncion));

console.log(unaFuncion());
console.log(otraFuncion());

////////////////////////////////////////////////
// Conversiones basicas entre tipos

// --- A boolean

function comprobarComoBoolean(variable){
    if (variable){
        console.log("Variable %s con tipo %s evaluada a true", variable, typeof(variable));
    }
    else{
        console.log("Variable %s con tipo %s evaluada a false", variable, typeof(variable));
    }

}

// Desde cadena

console.log("########### Conversion desde cadena a booleano ############")

var unaCadena = "";
var otraCadena = "algo";

comprobarComoBoolean(unaCadena);
comprobarComoBoolean(otraCadena);

// Desde numerico

var numero = 1000.0;
var otroNumero = 0.0;
var otraMas = -1;

comprobarComoBoolean(numero);
comprobarComoBoolean(otroNumero);
comprobarComoBoolean(otraMas);

// Desde objeto

var unObjeto = {};
var otroObjeto = null;

comprobarComoBoolean(unObjeto);
comprobarComoBoolean(otroObjeto);

// Desde undefined

var unUndefined;

comprobarComoBoolean(unUndefined);
comprobarComoBoolean(unObjeto.nombre);

// ### A numerico ###

// Desde cadena

// isFinite indica si esta dentro de rango numerico

if (isFinite("1e+500")){
    console.log("Cantidad dentro de rango numerico");
}
else{
    console.log("Cantidad fuera de rango numerico");
}

console.log("NO es numerico %s -> %s", isNaN(NaN), 'isNaN(NaN)');
console.log("NO es numerico %s -> %s", isNaN(10), 'isNaN(10)');
console.log("NO es numerico %s -> %s", isNaN("1000"), 'isNaN("1000")');
console.log("NO es numerico %s -> %s", isNaN("1000a"), 'isNaN("1000a")');
console.log("NO es numerico %s -> %s", isNaN(true), 'isNaN(true)');

// Conversiones

console.log("Conversion %s -> %s", parseInt("1234"), 'parseInt("1234")');
console.log("Conversion %s -> %s", parseInt("1234algo"), 'parseInt("1234algo")');
console.log("Conversion %s -> %s", parseInt("ABCD1010",16), 'parseInt("ABCD1010",16)');
console.log("Conversion %s -> %s", parseInt("01010101",2), 'parseInt("ABCD1010",2)');

console.log("Conversion %s -> %s", parseFloat("10.2"), 'parseFloat("10.2")');

