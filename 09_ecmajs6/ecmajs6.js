// Declaracion de variables

// En vez de emplear 'var' se emplea 'let' y 'const'

// Esto se podria cambiar
var euro_a_dolar = 0.8788
// Esto sera fijo y no se podra cambiar
const euro_a_dolar_ec6 = 0.8788

// Esta funcion dara un error
function probarConstantes(){
    euro_a_dolar = 1.2222;
    euro_a_dolar_ec6 = 1.2222;
    console.log("€ a $: %s", euro_a_dolar_ec6);
}

// probarConstantes();

//////////////////////////////////////////////////

function probarDeclaracionesLet(){
    var nombre = "Pedro";
    if (nombre){
        var nombre = "Luis";

        // La variable mas profunda es la que tomara el valor
        for(var i = 0; i < 2; i++){
            var nombre = "Alberto";

            console.log("Desde for: %s", nombre);
        }

        console.log(nombre);
    }
    console.log("Desde function: %s",nombre);
}

// Ahora con let las variables mantienen su nombre 
function probarDeclaracionesLet2(){
    let nombre = "Pedro";
    if (nombre){
        let nombre = "Luis";

        for(let i = 0; i < 2; i++){
            let nombre = "Alberto";

            console.log("Desde for: %s", nombre);
        }

        console.log(nombre);
    }
    console.log("Desde function: %s",nombre);
}

probarDeclaracionesLet2();

// Esto provoca error pues hay dos variables let con el mismo nombre, NO GANA NINGUNO
// ECMA JS 6 NO PERMITE REDECLARACIONES
// let fecha = "12/03/2021"; //
// let fecha = new Date(); //
// console.log("%s", fecha); //

////////////////////////////////////////////////////////////////
// Valores por defecto en parametros

// Se pueden declarar parametros por defecto sin ECMA6
function enviarSMS(telefono, mensaje){
    telefono = (telefono) ? telefono : "112";
    mensaje = (mensaje) ? mensaje : "SOS";

    console.log("Enviar SMS sin ECMA6: %s - %s", telefono, mensaje);

}

enviarSMS();

// Con ECMA6 puedes poner valores por defecto de los parametros al declarar la funcion
// [Mas comodo]
function enviarSMSEC6(telefono = "112", mensaje = "SOS", caller={
    id: 8777777,
    carrier: 122020
}){
    console.log("Enviar SMS CON ECMA6: %s - %s - %o", telefono, mensaje, caller);
}

enviarSMSEC6();

//////////////////////////////////////////////////////////////////
// spread ...

let valores = [ 100, 200, 300];

function probar(a, b, c){
    console.log("%s, %s, %s",a,b,c);
}
// Podemos extender todos los valores que tiene la matriz a una funcion
// De esta forma nos ahorramos tener que indexar cada uno de los valores
probar(...valores);

// Podemos hacer uso de spread ... para copiar una matriz en una variable
let copiaValores = [...valores];
// Esto tiene muchas posibilidades, no tiene porque tener la misma longitud que la matriz original
let copiaExtendida = [...valores,...copiaValores,5000,6000];

console.log(copiaExtendida.join(","));

// Puedes declarar parametros spread ...
// En este caso puedes tener todas las propiedades que quieras
function altaCliente(nombre,apellidos, ...propiedades){
    console.log("%s, %s, %s", nombre, apellidos, propiedades.join(","));
}

altaCliente ("german", "gonzalez", "propiedad1", 123456789, 10.10);


/////////////////////////////////////////////////////////////////////
// Desestructurar asignaciones

let coordenadas = [1.2, 3.4, 5.6];

console.log("%s, %s, %s", coordenadas[0], coordenadas[1], coordenadas[2]);

// Podemos desestructurar esa matriz para poder tener cada uno de los elementos de esta matriz en variables independientes
let [lat,lon, alt] = coordenadas;

console.log("%s, %s, %s", lat, lon, alt);

// No hace falta coger todas las variables que contiene la matriz, podemos solo coger las 2 primeras
let[x,y] = coordenadas;

// O incluso decidir cual de las variables quieres
let [ , , z] = coordenadas;

console.log("%s, %s, %s", x,y,z);


// Podemos incluso usar spread ...
let nombres = ["Alberto", "Luis", "Juan", "Pedro"];
// De esta forma asignamos al primer elemento la variable jefe y a todos los demas un array de empleados
let[jefe,...empleados] = nombres;
console.log("Jefe: %s - Empleados: %s",jefe, empleados.join(","));

// En este caso gana la variable que le asignamos (en vez del 5)
let matrizEnteros = [1,2,3];

let [p1,p2,p3 = 5,p4 = 6] = matrizEnteros;

console.log(p1,p2,p3,p4);

// Podemos tomar valores de una matriz manteniendo su estructura
let trayectoria = [
    [2.0,4.0,5.0],
    [2.0,4.0,5.0],
    [2.0,4.0,5.0]
];

let [A, B, C] = trayectoria;

let [[x11,x12,x13],[x21,x22,x23],[x31,x32,x33]] = trayectoria;

console.log("%s",x33);

// Empleo en objetos

// Vamos a tomar la variable nombre del objeto alumno
let alumno = {
    nombre: "Luis",
    apellidos: "Garcia"
};

// Esta variable apellidos no cambia si se cambia el atributo apellidos del objeto alumno
let {apellidos} = alumno;

console.log("Nombre: %s", apellidos);

// Le puedo cambiar el nombre a los atributos del objeto alumno
// Incluso puedo insertar atributos que no estaban en la definicion inicial
// E incluso darle valores a esos atributos
let {
    nombre : nombreAlumno,
    apellidos : apellidosAlumno,
    correo : correoAlumno,
    telefono : telefonoAlumno = "123456789"
} = alumno;

console.log("Nombre: %s, Apellidos: %s, Correo: %s, Telefono: %s", nombreAlumno,apellidosAlumno,correoAlumno, telefonoAlumno);


// SINTAXIS OBJETOS SON LAS LLAVES
// Podemos ver como se pueden captar atributos dentro de atributos y darles otro nombre
let producto = {
    nombre: "Monitor 32",
    dimensiones: {
        ancho: 22,
        alto: 50,
        largo: 60
    }
};

let {dimensiones : {ancho : ancho_mm}} = producto;

console.log("Ancho: %s", ancho_mm);


// Se pueden tomar como parametros atributos dentro de atributos
function prepararEmbalaje(
    {
        dimensiones: {ancho,alto,largo}
    }
){
    console.log("Ancho: %s - Alto: %s - Largo: %s", ancho,alto,largo);
}
// Llamo a la funcion por el objeto producto
prepararEmbalaje(producto);

