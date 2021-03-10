
function mostrarCliente(cte,separador){
    console.log("Nombre: %s%sApellidos: %s%s", 
    cte.nombre, separador, cte.apellidos,separador);
}

mostrarCliente(
    {
        nombre: "Juan", apellidos: "Perez"
    },
    " "
);
// Llamar funcion de dos parametros SIN PARAMETROS (en este caso daria error de ejecucion)
// mostrarCliente();
// En este caso no da error, salen Undefined
mostrarCliente({});

///////////////////////////////////////////////////////
// Comprobacion de argumentos dentro de una funcion

function compararClientes(cte1,cte2,nombrePropiedad){
    console.log("No. argumentos: %s", arguments.length);
    if (arguments.length == 3){
        console.log ("Nos han llegado todos los argumentos (3)");
        console.log("Cte1: %o - Cte2: %o - %s", 
        arguments[0],arguments[1],arguments[2]);

        if (cte1[nombrePropiedad] && cte2[nombrePropiedad]){
            return cte1[nombrePropiedad] == cte2[nombrePropiedad];
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

var resultado = compararClientes(
    {
        nombre : "Pedro"
    },
    {
        nombre : "German"
    },
    "nombre"

)

console.log("El resultado de esta funcion es: %s",resultado);

console.log(compararClientes(
    {
        nombre : "Pedro"
    },
    {
        nombre_no_tiene : "German"
    },
    "nombre"

));