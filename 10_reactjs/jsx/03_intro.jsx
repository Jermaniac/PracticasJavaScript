
class VisorNoticias extends React.Component {
    constructor(props){
        super(props);

        // Para emplear estado se declara a nivel de componente
        // SOLO se puede crear en el constructor

        this.state = {
            contadorDeNoticias : 0,
            registroDeNoticias : [],
            ultimaNoticia : {
                categoria : "Deportes",
                fecha : new Date(),
                texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }  
        };
    }

    cambiarNoticia = (ev) => {
        console.log("Click en cambiar noticia.");

        // Para cambiar el estado existen dos posiblidades

        // 1. El nuevo estado no depende del anterior
        //      El estado puede cambiar de forma parcial

        //      NOTA: en este caso no es lo que buscamos, porque necesitamos aumentar el contador del estado
        //      y no perder las ultimas noticias que se vayan actualizando, es decir, guardarlas en la matriz.
        // this.setState(
        //     {
        //         ultimaNoticia : {
        //             categoria : "Deportes *modificado*",
        //             fecha : new Date(),
        //             texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. *modificado*"
        //         }  
        //     }
        // );

        // 2. El nuevo estado SI depende del anterior
        
        this.setState(
            (estadoAnterior, propiedadesAnteriores) =>  {

                return {

                    ultimaNoticia : {
                        categoria : "Deportes *modificado*",
                        fecha : new Date(),
                        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. *modificado*"
                    },
                    contadorDeNoticias : estadoAnterior.contadorDeNoticias + 1,
                    // Incorporo todas las noticias acumuladas de la matriz registroDeNoticias y la ultima Noticia
                    registroDeNoticias : [...estadoAnterior.registroDeNoticias, estadoAnterior.ultimaNoticia]

                };
            }
        );

    };

    render(){
        // USAREMOS UN COMPONENTE HIJO PARA QUE SALGA LA ULTIMA NOTICIA AL PRINCIPIO DE LA PAGINA
        // A este componente hijo le pasamos como props los datos de la ultima noticia
        return(
            <div className="jumbotron">
                <FichaNoticia noticia={this.state.ultimaNoticia}/>
                <h3>Actualizaciones {this.state.contadorDeNoticias}</h3>
                <button onClick={this.cambiarNoticia} className="btn btn-primary">Pulsa para cambiar</button>
                <ul className="list-group">
                    {
                        // CADA COMPONENTE DE REACT TIENE QUE TENER ATRIBUTO KEY
                        // El componente hijo lo podemos reutilizar para hacer la lista de noticia (CODIGO REUTILIZABLE)
                        this.state.registroDeNoticias.map(
                            (noticia, indice) => {
                                return (
                                    <FichaNoticia noticia={noticia} key={indice}/>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
};

// COMPOENNTE HIJO
class FichaNoticia extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="list-group-item">
                <h4>{this.props.noticia.categoria}</h4>
                <p>{this.props.noticia.texto}</p>
                <h2>{this.props.noticia.fecha.toISOString()}</h2>
            </li>
        );
    }

}

ReactDOM.render(
    <VisorNoticias></VisorNoticias>,
    document.querySelector("div#contenedor")
);