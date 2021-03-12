// Metodos del ciclo de vida de un componente React

// Recordar que la convencion de componentes en React es con mayusculas
class ProbarMetodosCicloDeVida extends React.Component{
    // Por convencion los argumentos se denominan props
    constructor(props){
        super(props);

        console.log("Constructor del componente/clase ProbarMetodosCicloDeVida....");
    }

    // Esto solo se llama una vez
    // DESPUES DE AÑADIRLO AL DOM
    componentDidMount(){
        console.log("componentDidMount ProbarMetodosCicloDeVida....");
    }

    // Se ejecuta cada vez que se muestra el componente
    render() {
        console.log("render ProbarMetodosCicloDeVida....");

        return(
            <div className="jumbotron">
                <h1>Componente para probar ciclo de vida</h1>
                <p>Desaparece en 3 segundos</p>
            </div>
        );
    }

    // Se ejecuta despues de cada render
    componentDidUpdate(){
        console.log("componentDidupdate ProbarMetodosCicloDeVida");
    }

    // Se ejecuta antes de cada render
    componentWillUpdate(){
        console.log("componentWillUpdate ProbarMetodosCicloDeVida");
    }

    // Se ejecuta justo antes de quitar el componente del DOM
    componentWillUnmount(){
        console.log("componentWillUnmount ProbarMetodosCicloDeVida");
    }

};

ReactDOM.render(
    <ProbarMetodosCicloDeVida></ProbarMetodosCicloDeVida>,
    document.querySelector("div#contenedor")
);

// Vamos a desmontar el componente dentro de 3 segundos
setInterval(
    () => ReactDOM.unmountComponentAtNode(document.querySelector("div#contenedor")),
    3000
);


