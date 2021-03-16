var _jsxFileName = "jsx/03_intro.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisorNoticias = function (_React$Component) {
    _inherits(VisorNoticias, _React$Component);

    function VisorNoticias(props) {
        _classCallCheck(this, VisorNoticias);

        // Para emplear estado se declara a nivel de componente
        // SOLO se puede crear en el constructor

        var _this = _possibleConstructorReturn(this, (VisorNoticias.__proto__ || Object.getPrototypeOf(VisorNoticias)).call(this, props));

        _this.cambiarNoticia = function (ev) {
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

            _this.setState(function (estadoAnterior, propiedadesAnteriores) {

                return {

                    ultimaNoticia: {
                        categoria: "Deportes *modificado*",
                        fecha: new Date(),
                        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. *modificado*"
                    },
                    contadorDeNoticias: estadoAnterior.contadorDeNoticias + 1,
                    // Incorporo todas las noticias acumuladas de la matriz registroDeNoticias y la ultima Noticia
                    registroDeNoticias: [].concat(_toConsumableArray(estadoAnterior.registroDeNoticias), [estadoAnterior.ultimaNoticia])

                };
            });
        };

        _this.state = {
            contadorDeNoticias: 0,
            registroDeNoticias: [],
            ultimaNoticia: {
                categoria: "Deportes",
                fecha: new Date(),
                texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
        };
        return _this;
    }

    _createClass(VisorNoticias, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            // USAREMOS UN COMPONENTE HIJO PARA QUE SALGA LA ULTIMA NOTICIA AL PRINCIPIO DE LA PAGINA
            // A este componente hijo le pasamos como props los datos de la ultima noticia
            return React.createElement(
                "div",
                { className: "jumbotron", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    },
                    __self: this
                },
                React.createElement(FichaNoticia, { noticia: this.state.ultimaNoticia, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    },
                    __self: this
                }),
                React.createElement(
                    "h3",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                        },
                        __self: this
                    },
                    "Actualizaciones ",
                    this.state.contadorDeNoticias
                ),
                React.createElement(
                    "button",
                    { onClick: this.cambiarNoticia, className: "btn btn-primary", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        },
                        __self: this
                    },
                    "Pulsa para cambiar"
                ),
                React.createElement(
                    "ul",
                    { className: "list-group", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        },
                        __self: this
                    },

                    // CADA COMPONENTE DE REACT TIENE QUE TENER ATRIBUTO KEY
                    // El componente hijo lo podemos reutilizar para hacer la lista de noticia (CODIGO REUTILIZABLE)
                    this.state.registroDeNoticias.map(function (noticia, indice) {
                        return React.createElement(FichaNoticia, { noticia: noticia, key: indice, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                            },
                            __self: _this2
                        });
                    })
                )
            );
        }
    }]);

    return VisorNoticias;
}(React.Component);

;

// COMPOENNTE HIJO

var FichaNoticia = function (_React$Component2) {
    _inherits(FichaNoticia, _React$Component2);

    function FichaNoticia(props) {
        _classCallCheck(this, FichaNoticia);

        return _possibleConstructorReturn(this, (FichaNoticia.__proto__ || Object.getPrototypeOf(FichaNoticia)).call(this, props));
    }

    _createClass(FichaNoticia, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "list-group-item", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    },
                    __self: this
                },
                React.createElement(
                    "h4",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 98
                        },
                        __self: this
                    },
                    this.props.noticia.categoria
                ),
                React.createElement(
                    "p",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 99
                        },
                        __self: this
                    },
                    this.props.noticia.texto
                ),
                React.createElement(
                    "h2",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        },
                        __self: this
                    },
                    this.props.noticia.fecha.toISOString()
                )
            );
        }
    }]);

    return FichaNoticia;
}(React.Component);

ReactDOM.render(React.createElement(VisorNoticias, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 108
    },
    __self: this
}), document.querySelector("div#contenedor"));
//# sourceMappingURL=03_intro.js.map