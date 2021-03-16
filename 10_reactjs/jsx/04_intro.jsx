
class Formulario extends React.Component {
    constructor(props){
        super(props);

        this.state={
            nombre: "German",
            apellidos : "Gonzalez",
            comentarios: "Esto es un comentario",
            provincia: "Roshar",
            errorEnNombre: false
        };
    }

    leerCampo = (ev) => {

        switch (ev.target.name) {
            case "nombre":
                this.setState(
                    {
                        errorEnNombre : !/^[a-zA-Z]{3,20}$/.test(ev.target.value)
                    }
                )
                break;
        
            default:
                break;
        }
        this.setState(
            {
                // esta es una forma de leer todos los campos que vengan con una sola linea de codigo
                [ev.target.name]: ev.target.value
            }
        );

    };
    verEstado = (ev) => {
        console.log(this.state);
    };

    // Llamar a una url de un servidor: API Fetch
    enviar = (ev) => {
        // fetch no devuelve nada de forma directa, por defecto la invocacion es ASINCRONA
        // Devuelve una promesa
        fetch(
            "http://localhost:3000/clientes",
            {
                // NO hace falta ponerlo, por defecto es GET
                method : "POST",
                body : JSON.stringify(this.state),
                headers : {
                    "Content-type" : "application/json"
                }
            }
        ).then(
            // Procesamos la respuesta si no hay error
            (respuesta) => {
                // Comprobamos si la invocacion (en capa de transporte) es correcta y procesada [200]
                if(respuesta.ok){
                    console.log("Invocacion correcta");
                }
                else{
                    console.log("Invocacion con error ...")
                    console.log(
                        {
                            estado : respuesta.status,
                            texto : respuesta.statusText
                        }
                    )
                }
            }
        )
        .catch(
            // Si no se puede realizar invocacion
            (razon) => {
                console.log("Error al intentar invocacion por AJAX: catch");
            }
        )
    }
    render(){
        // Para que no se recargue la pagina ponemos al boton el type button
        return(
            <div className="jumbotron">
                <h1>Formulario React</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text" name="nombre" id="nombre"
                            value={this.state.nombre} 
                            onChange={this.leerCampo}
                        />
                        {
                            this.state.errorEnNombre && <div className="alert alert-danger">Nombre incorrecto</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input className="form-control" type="text" name="apellidos" id="apellidos"
                            value={this.state.apellidos} 
                            onChange={this.leerCampo}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comentarios">Comentarios</label>
                        <textarea className="form-control" name="comentarios" id="comentarios"
                            value={this.state.comentarios} 
                            onChange={this.leerCampo}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="provincia">Provincia</label>
                        <select className="form-control" type="text" name="provincia" id="provincia"
                            value={this.state.provincia} 
                            onChange={this.leerCampo}
                        >
                            <option value="01">Provincia 01</option>
                            <option value="02">Provincia 02</option>
                            <option value="03">Provincia 03</option>
                            <option value="04">Provincia 04</option>
                            <option value="05">Provincia 05</option>
                            <option value="06">Provincia 06</option>
                            <option value="07">Provincia 07</option>
                            <option value="08">Provincia 08</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.enviar} className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Formulario/>,
    document.querySelector("div#contenedor")
);