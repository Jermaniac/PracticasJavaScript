
var cliente = new Object();

cliente.id = 1000;
cliente.nombre= "German";
cliente.mostrar = function(){
    console.log("Cliente [%s,%s]", this.id, this.nombre);
}

var coche = {
    matricula : "1020-ABC",
    itvOK : false,
    pasarItv : function(resultado){
        this.itvOK = resultado
    }
};

console.log(cliente);
console.log(coche);
cliente.mostrar();
coche.pasarItv(true);
console.log(coche)

//////////////////////////////////
// Funciones constructor

function Alumno(nombre, apellidos, domicilio){

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.domicilio = domicilio;

    this.matricularACurso= function(codigoCurso){
        console.log("Alumno %s matriculado en el curso %s", this.nombre, codigoCurso);
    }
}

var unAlumno = new Alumno ("German", "Perez", "Calle serrano 20");
console.log(unAlumno);
console.log("CAMBIANDO DOMICILIO");
unAlumno.domicilio = "Calle cambiada";
console.log(unAlumno);
console.log("MATRICULAR ALUMNO")
unAlumno.matricularACurso("1234");

// Prototipos 

console.log ("Prototipo por defecto");
console.log(Alumno.prototype);

// Propiedades compartidas con todas las instancias
Alumno.prototype = {
    id: 0,
    buscar : function (idAlumno){
        // no empleamos el idAlumno
        return new Alumno("Alumno0","Apellido0","Domicilio0");
    },
    enviarMensaje : function (mensaje){
        console.log("Mensaje %s enviado a %s %s", mensaje, this.nombre, this.apellidos);
    }
};

var otroAlumno = new Alumno("Fernando", "Torres", "Calle hortaleza");

console.log(otroAlumno.enviarMensaje("MENSAJEPRUEBA"));

unAlumno.id = 1000;

console.log(otroAlumno);

console.log("Alumno.id: %s", Alumno.id);




