
import {VisorClientes} from "./visorclientes.js"

class TablaClientes extends React.Component {

    constructor(props) {
        super(props);

        // this.clientes = [];

        // this.state = {
        //     nombre: "German",
        //     apellidos: "",
        //     comentarios: "",
        //     provincia : "",
        //     errorEnNombre: false
        // }
        this.state = {
            items : []
        };
    }

    componentDidMount() {
        // Devuelve una promesa
        fetch("http://localhost:3000/clientes")
            .then(
                (respuesta) =>{
                    if (respuesta.ok){
                        console.log("Invocacion correcta.")
                        respuesta.json()
                        .then(
                        (resp) => {
                            this.setState({
                                items : resp
                                // Esto seria necesario en caso de que lo hubiera puesto fuera del state
                                // this.forceUpdate
                            })
                        } 
                        )

                    }
                    else{
                        console.log("Invocacion con error ...")
                        console.log(
                                {
                                    estado: respuesta.status,
                                    texto: respuesta.statusText
                                }
                        )

                    }
                    }
            )
            .catch(
                // Si no se puede realizar invocacion
                (razon) => {
                    alert(`Error al intentar invocacion por AJAX.\n${JSON.stringify(razon)}`);
                }
            )
    }
    render() {
        return (
            <div>
                <VisorClientes clientes={this.state.items}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TablaClientes />,
    document.querySelector("div#contenedor")
);