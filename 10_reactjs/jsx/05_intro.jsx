
import {VisorProductos} from "./visorproductos.js";
import {VisorCarrito} from "./visorcarrito.js";

class Aplicacion extends React.Component {
    constructor(props){
        super(props);

        this.state= {

            productos : [],
            carrito : new Map()
        };
    }

    componentDidMount() {
        let catalog = [];
        for (let i = 1; i <= 12; i++){
            catalog.push(
                {
                    id : i,
                    nombre : "Producto " + i,
                    precio : Math.random() * 500.0,
                    iva : 21.0
                }
            );
        }

        this.setState(
            {
                productos : catalog
            }
        );
    }

    // lo defino aqui porque es el padre y lo puedo pasar por props a visorproductos.jsx
    comprar = (producto) =>{
        this.setState(
            (estadoAnterior,propiedadesAnteriores) => {
                estadoAnterior.carrito.set(producto.id,{cantidad : 1, ref : producto});
                return {
                    carrito : estadoAnterior.carrito
                }
            }
        );
    }

    quitar = (producto) =>{
        this.setState(
            (estadoAnterior,propiedadesAnteriores) => {

            estadoAnterior.carrito.delete(producto.id);
                return {
                    carrito : estadoAnterior.carrito
                }
            }
        );
    }

    // En este caso hemos definido dos metodos comprar y quitar.
    // Para poder usarlos en los componentes hijos los pasamos utilizando una etiqueta por defecto on...={..}
    render(){
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col">
                        <VisorProductos productos={this.state.productos} 
                        carrito={this.state.carrito}
                        onCompra={this.comprar}
                        
                        />
                    </div>
                    <div className="col">
                        <VisorCarrito carrito={this.state.carrito} onQuitar={this.quitar}/>
                    </div>
                </div>
            </div>
        );
    }

}

ReactDOM.render(
    <Aplicacion/>,
    document.querySelector("div#contenedor")
);