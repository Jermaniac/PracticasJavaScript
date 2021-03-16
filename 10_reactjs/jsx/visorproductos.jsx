
export class VisorProductos extends React.Component{
    constructor(props){
        super(props);
    }

    // Utilizamos la etiqueta onClick para poder hacer uso del metodo del component padre Aplicacion
    // {()=>this.props.onCompra(producto)} le pasamos el producto como parametro
    render(){
        return (
            this.props.productos.map(
                (producto, indice) => {
                    return (
                        <div className="card shadow m-4" key={producto.id}>
                            <div className="car-body m-4">
                                <h4 className="card-title">{producto.nombre}</h4>
                                <h5 className="card-text">{producto.precio} €</h5>
                                {
                                    !this.props.carrito.has(producto.id) &&
                                    <button className="btn btn-primary" 
                                    onClick={()=>this.props.onCompra(producto)}>
                                        Comprar
                                    </button>
                                }
                            </div>
                        </div>
                    );
                }
            )
        );
    }
}