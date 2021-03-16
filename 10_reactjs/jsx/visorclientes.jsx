
export class VisorClientes extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Provincia</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.clientes.map(
                    (item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.provincia}</td>
                            </tr>
                        )
                    
                )}
                </tbody>
            </table>
        )
        
    }

}