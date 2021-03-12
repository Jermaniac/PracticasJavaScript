// Crear componentes en react

const componenteLiteral = <h1>Expresion JSX {2 + 2}</h1>;

// Enchufarlo en la pagina

ReactDOM.render(
    componenteLiteral,
    document.querySelector("div#contenedor")
);

// Componente como funcion
// CONVENCION: NOMBRES COMPONENTES REACT EN MAYUSCULAS
function VerFichaCliente(props){

    let ficha = (
    <div>
        <h5>{props.datos.nombre} {props.datos.apellidos}</h5>
        <h6>{props.datos.correo}</h6>
    </div>
    );

    if(props.modo=="resumen"){
        ficha = (<h5>{props.datos.nombre} {props.datos.apellidos}</h5>);

    }
    // className se usa para referenciar clases
    // Es necesario devolverlo con return
    return (
        <div className="card">
            <div className="card-header">Ficha de cliente</div>
            <div className="card-body">
                {ficha}
            </div>
        </div>);
}

const datosCliente =  {
    nombre: "German",
    apellidos: "Gonzalez",
    correo : "correofalso@gmail.com"
}

ReactDOM.render(
    // Con esto volcamos el componente en la pagina
    // como la variable se llama datos, le asignamos entre corchetes el dato
    // Vamos a incorporar una propiedad que no existia antes "modo"
    // si ponemos a "resumen" entra en el bucle if y no pone el correo
    // si lo quitamos sale todo
    <VerFichaCliente datos={datosCliente} modo="resumen" />,
    document.querySelector("div#prueba1")

);

// Componente como clase
// Es necesario extender de React.Component
class VerFichaCurso extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.datos.nombre} </div>
                <div className="card-body">
                    <p>{this.props.datos.descripcion}</p>
                    <p>{this.props.datos.duracion}</p>
                </div>
            </div>
        );
    }
};

const datosCurso ={
    nombre: "ReactJS",
    duracion: 8,
    descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, voluptatibus"
}

ReactDOM.render(
    <VerFichaCurso datos={datosCurso} />,
    document.querySelector("div#prueba2")
);

