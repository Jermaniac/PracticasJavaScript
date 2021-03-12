import * as Comun from "./ecmajs6modulos.js";

// Le podemos asignar nombre a las improtaciones

// Soporte nativo de clases

// Una clase estandar en JS
class Vehiculo {
    constructor(marca, modelo, potenciaCV){
        // CONVENCION: el guion bajo _ indica private
        this._marca = marca;
        this._modelo = modelo;
        this._potenciaCV = potenciaCV;
        
        console.log("Construyendo vehiculo: ", this._marca, this._modelo, this._potenciaCV);
    }

    // Propiedades en JS

    arrancar(){
        console.log("Arrancando vehiculo..... ",this._marca, this._modelo, this._potenciaCV);
    }

    // lo marcamos como proppiedad get (obtenemos valor)
    get marca(){
        return this._marca;
    }

    // lo marcamos como proppiedad set (insertamos valor)
    set marca(valor){
        this._marca = valor;
    }

    get ficha(){
        return `Marca: ${this._marca}, Modelo: ${this._modelo}, Potencia: ${this._potenciaCV}`;
    }

    // metodos estaticos
    static buscarPorModelo (modelo){
        console.log("Buscando vehiculos con modelo: %s", modelo);

        return [];
    }

};

let unVehiculo = new Vehiculo("opel","corsa",105);

unVehiculo.arrancar();
// Esto es una propiedad no un metodo por lo que hace falta un console.log
console.log(unVehiculo.ficha);
console.log(unVehiculo._marca);

let consulta = Vehiculo.buscarPorModelo ("corsa");
console.log(consulta);

console.log(unVehiculo.ficha);

///////////////////////////////////////////////////////////////////////
// HERENCIA

class Coche extends Vehiculo {
    constructor (marca, modelo, potenciaCV, matricula){
        super(marca,modelo,potenciaCV);
        this._matricula = matricula;
    }

    arrancar(){
        console.log("Arrancando COCHE.....");
    }
}

let unCoche = new Coche("Acme", "C1000", 225, "1234-OLK");

console.log(unCoche.ficha);

unCoche.arrancar();


///////////////////// IMPORTS

console.log(Comun.URL_SERVICIOS);

