
// if -> como en java

// while, do..while -> como en java

// for( ; ; ) como en java

// for... in

// matrices

var matriz = [10,20,30,40];

for (var elemento in matriz){
    console.log("Elemento: %s", matriz[elemento]);
}

// objetos

var config = {
    url: "http://acme.com/config/v1.0",
    user : "config",
    password : "config"
};

for (var propiedad in config){
    console.log("%s -> %s",propiedad,config[propiedad]);
}

var nombre = "URL";
console.log("url: %s", config.url);
console.log("url: %s", config.nombre);
console.log("url: %s", config[nombre]);

// with

var curso = {
    nombre : "Javascript",
    duracion : 40,
    asistentes : [
        {
            nombre: "Alberto"
        },
        {
            nombre: "Fernando"
        }
    ]
}

with(curso){
    console.log("curso.nombre: %s", nombre);
    console.log("curso.nombre: %o", asistentes);
}

//switch

var provincia = "madrid";

switch (provincia){
    case "madrid":
        console.log("Codigo 28");
        break;
    case "zaragoza":
        console.log("Codigo 50");
        break;
    default:
        break;
}

var saldo = 1000;

switch(true){
    case saldo >= 0 && saldo < 1000 :
        console.log("[0,1000]");
        break;
    case saldo >= 1000 && saldo < 10000 :
        console.log("[1000,10000]");
        break;
    default:
        console.log("Menos que 0 y mas que 10000")
        break;
}



