
var alumnos = new Array();

var vehiculos = new Array(20);

var cursos = new Array("Javascript","React", "Angular");

var serieNumerica = [1,2,3,4,5];

var codigos = [];

var hojaAsistencia = [
    {
        nif: "12121212A"
    },
    {
        nif: "12121212B"
    }
];

console.log("No. cursos: %s", cursos.length, cursos);

hojaAsistencia[1] = {
    nif : "12121212C"
};

hojaAsistencia.push(
    {
        nif: "12121212D"
    }
)

console.log("Asistencias: %o", hojaAsistencia);

console.log("Es una matriz: %s",Array.isArray(hojaAsistencia));

//////////////////////////////////////////////////////
// Matriz como pilo - LIFO (Last IN First OUT)

console.log("#############################MATRIZ COMO PILA - LIFO#############################");

var pilaComandos = [];

pilaComandos.push("CrearInforme");
pilaComandos.push("DarAltaTransferencias");
pilaComandos.push("RealizarBackUp");

console.log(pilaComandos);

console.log("JOIN: "+pilaComandos.join(","));

var ultimoComando = pilaComandos.pop();

console.log("Realizamos .pop()");
console.log(pilaComandos);
console.log("JOIN: "+pilaComandos.join(","));

///////////////////////////////////////////////////7
// Matriz como cola - FIFO ( First IN first OUT)

console.log("#############################Matriz como cola####################################")

var colaPedidos=[];

colaPedidos.push("Pedido1","Pedido2","Pedido3");
console.log(colaPedidos);
console.log("JOIN: "+colaPedidos.join(","));

console.log("Realizamos .shift()");

var primerPedido = colaPedidos.shift();

console.log(colaPedidos);
console.log("JOIN: "+colaPedidos.join(","));

///////////////////////////////////////////////////
// Matriz como cola con doble extremo - DEQUEUE

var articulosVisitados = [];

// Insertar por el principio de la matriz
console.log ("Insertamos por el principio con .unshift(..)");
articulosVisitados.unshift("Articulo 1","Articulo 2","Articulo 3");
articulosVisitados.unshift("Articulo 4");

console.log(articulosVisitados.join(","));

var primerArticulo = articulosVisitados.pop();

console.log("Primer articulo: %s", primerArticulo);

console.log(articulosVisitados.join(","));


/////////////////////////////////////////////////////
// Ordenacion inversa

console.log("#############################ORDENACION INVERSA####################################")

var precios = [1000.0, 200.0, 50.0,2000.0, 1500.0];

console.log(precios.join(","));

precios.reverse();

console.log(precios.join(","));

precios.sort();

console.log(precios.join(","));

precios.sort(
    // negativo si es menor y positivo si es mayor, 0 si es igual
    function(x,y){
        return x-y;
    }
);

console.log(precios.join(","));

var compras = [
    {
        codigo: 2000,
        fecha : Date.parse("2020-10-08"),
        importe : 4245.50
    },
    {
        codigo: 1000,
        fecha : Date.parse("2020-09-08"),
        importe : 3245.50
    },
    {
        codigo: 4000,
        fecha : Date.parse("2020-01-01"),
        importe : 245.50
    },
    {
        codigo: 3000,
        fecha : Date.parse("2020-01-01"),
        importe : 7245.50
    }
];
// console.log(compras)


function crearComparacion(propiedad, direccion){
    return function(objA, objB){
        var propA = objA[propiedad];
        var propB = objB[propiedad];

        var retorno = 0;
        if (propA < propB){
            retorno = -1;
        }
        else if(propA>propB){
            retorno = 1;
        }
        if (direccion){
            return (direccion ? retorno: -retorno);
        }
        return retorno;
    }
}


compras.sort(crearComparacion('importe'));

console.log(compras)

// compras.sort(crearComparacion('codigo'));

// console.log(compras)



/////////////////////////////////////////////////////
// Operaciones comunes

console.log("#############################OPERACIONES COMUNES####################################")

var serie1 = [1,2,3];
var serie2 = [100,200,300];
var datos = serie1.concat(serie2);

console.log(serie1.join(","));
console.log(datos.join(","));

var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

console.log(dias.join(","));

var diasBorrados = dias.splice(0,2);

console.log(diasBorrados.join(","));

console.log(dias.join(","));

// Insertar elemento (splice nos sirve para insertar tambien)

dias.splice(0,0,"LUNES2","MARTES2");
console.log(dias.join(","));

dias.splice(5,0,"SABADO","DOMINGO");
console.log(dias.join(","));

dias.splice(2,2,"MiercolesCambiado","JuevesCambiado");
console.log(dias.join(","));

// Particiones

console.log("######### Particiones ###################");

var monitorValues = [ 1000, 2000, 3000, 3000, 4000];

var los2Primeros = monitorValues.slice(0,2);

var el2YEl3 = monitorValues.slice(1,3);

console.log("Todos: %s", monitorValues.join(","));
console.log("2 Primeros: %s", los2Primeros.join(","));
console.log("El 2 y el 3: %s", el2YEl3.join(","));

var posicionDe2000 = monitorValues.indexOf(2000);
var posicionDe20000 = monitorValues.indexOf(20000);

var ultimo3000 = monitorValues.lastIndexOf(3000);

console.log("2000: %s, 20000: %s, 3000: %s",
posicionDe2000, posicionDe20000, ultimo3000);

function range (inicio, fin, paso){
    var incr = 1;
    var matriz = [];
    if (paso){
        incr = paso;
    }
    for (var i = inicio; i<fin; i+= incr){
        matriz.push(i);
    }

    return matriz

}

///////////////////////////////////////////
// Algoritmos comunes

console.log("############################ ALGORITMOS COMUNES #################");

console.log("# Filtrado de elementos con .filter#");

var datosAFiltrar = range(1, 20);

// Vamos a filtrar por los numeros que son pares
var datosPares = datosAFiltrar.filter(
    // Esta funcion es un predicado y devuelve true o false
    function(elemento, indice, matriz){
        return elemento % 2 == 0;
    }
);

console.log("Todos: %s", datosAFiltrar.join(","));
console.log("Pares: %s", datosPares.join(","));

console.log("## MAPEO DE ELEMENTOS ##");

// Aqui vamos a realizar el cuadrado de cada uno de los elementos
var cuadradosDeLosDatos = datosAFiltrar.map(
    function (elemento, indice, matriz){
        return elemento * elemento;
    }
)
console.log("Elementos al cuadrado: %s", cuadradosDeLosDatos.join(","));

console.log("# REDUCCION ELEMENTOS #");

var suma = datosAFiltrar.reduce(
    function(anterior,actual,indice,matriz){
        return anterior + actual;
    }
);

console.log("Suma: %s", suma);

var media = datosAFiltrar.reduce(
    function(anterior,actual,indice,matriz){
        var total = anterior + actual;
        if (indice == matriz.length - 1){
            total = total / matriz.length;
        }
        return total;
    }
);

console.log("Media por reduce: %s", media);
console.log("Media calculada por bruto: %s", (1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19)/19);

console.log("# Aplicar funcion a elementos #")
// forEach  NO TE DEVUELVA NADA, SIMPLEMENTE APLICA ALGO A UNA SERIE DE ELEMENTOS
datosAFiltrar.forEach(
    function(elemento,indice,matriz){
        console.log("El valor en la posicion %s es: %s",indice,elemento);
    }
);

console.log("# Probar una condicion en todos los elementos (.every)#");
// every devuelve true o false
var sonTodosPositivos = datosAFiltrar.every(
    function (valor,indice,matriz){
        return valor > 0;
    }
);

console.log("¿Son todos los elementos positivos?: %s", sonTodosPositivos);

console.log("# Probar una condicion en algun elemento (.some)#");

var hayValor5 = datosAFiltrar.some(
    function(valor,indice,matriz){
        return valor == 5;
    }
);

console.log("¿Hay algun elemento que sea 5?: %s", hayValor5);







