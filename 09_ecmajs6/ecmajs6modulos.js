
// Para que otro fichero de javascript pueda usar lo de este fichero, se debe de usar export

export const URL_SERVICIOS = "https://acme.com/v1.0";

export function cargarDatosGlobales(){
    console.log("Cargando datos globales ...");
};

export class GestorClientes {

    constructor(){
        console.log("Construyendo GestorClientes ...");
    }

};

// Existe otra forma de exportar, sin poner la palabra export
// Elegir uno de las dos formas
// export {URL_SERVICIOS, cargarDatosGlobales, GestorClientes};