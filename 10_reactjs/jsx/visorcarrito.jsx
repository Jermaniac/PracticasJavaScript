
export class VisorCarrito extends React.Component{
    constructor(props){
        super(props)
    }

    // 
    render(){
        let compras = [];
        this.props.carrito.forEach(
            (compra) => {
                compras.push(
                    <li className="list-group-item" key={compra.ref.id}>
                        <span className="h4">{compra.ref.nombre}</span>
                        <button className="btn btn-primary mx-4" 
                        onClick={()=>this.props.onQuitar(compra.ref)}>x</button>
                    </li>
                )
            }
        )
        
        // Si hay compras en carrito se pintan
        return compras.length ? 
        (
            <div className="card my-4">
                <ul className="list-group list-group-flush">
                    {compras}
                </ul>
            </div>
        ) : null;
    }
    
}