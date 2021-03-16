var _jsxFileName = "jsx/04_intro.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Formulario = function (_React$Component) {
    _inherits(Formulario, _React$Component);

    function Formulario(props) {
        _classCallCheck(this, Formulario);

        var _this = _possibleConstructorReturn(this, (Formulario.__proto__ || Object.getPrototypeOf(Formulario)).call(this, props));

        _this.leerCampo = function (ev) {

            switch (ev.target.name) {
                case "nombre":
                    _this.setState({
                        errorEnNombre: !/^[a-zA-Z]{3,20}$/.test(ev.target.value)
                    });
                    break;

                default:
                    break;
            }
            _this.setState(_defineProperty({}, ev.target.name, ev.target.value));
        };

        _this.verEstado = function (ev) {
            console.log(_this.state);
        };

        _this.enviar = function (ev) {
            // fetch no devuelve nada de forma directa, por defecto la invocacion es ASINCRONA
            // Devuelve una promesa
            fetch("http://localhost:3000/clientes", {
                // NO hace falta ponerlo, por defecto es GET
                method: "POST",
                body: JSON.stringify(_this.state),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(
            // Procesamos la respuesta si no hay error
            function (respuesta) {
                // Comprobamos si la invocacion (en capa de transporte) es correcta y procesada [200]
                if (respuesta.ok) {
                    console.log("Invocacion correcta");
                } else {
                    console.log("Invocacion con error ...");
                    console.log({
                        estado: respuesta.status,
                        texto: respuesta.statusText
                    });
                }
            }).catch(
            // Si no se puede realizar invocacion
            function (razon) {
                console.log("Error al intentar invocacion por AJAX: catch");
            });
        };

        _this.state = {
            nombre: "German",
            apellidos: "Gonzalez",
            comentarios: "Esto es un comentario",
            provincia: "Roshar",
            errorEnNombre: false
        };
        return _this;
    }

    // Llamar a una url de un servidor: API Fetch


    _createClass(Formulario, [{
        key: "render",
        value: function render() {
            // Para que no se recargue la pagina ponemos al boton el type button
            return React.createElement(
                "div",
                { className: "jumbotron", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    },
                    __self: this
                },
                React.createElement(
                    "h1",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 84
                        },
                        __self: this
                    },
                    "Formulario React"
                ),
                React.createElement(
                    "form",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "form-group", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86
                            },
                            __self: this
                        },
                        React.createElement(
                            "label",
                            { htmlFor: "nombre", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                },
                                __self: this
                            },
                            "Nombre"
                        ),
                        React.createElement("input", { className: "form-control", type: "text", name: "nombre", id: "nombre",
                            value: this.state.nombre,
                            onChange: this.leerCampo,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            },
                            __self: this
                        }),
                        this.state.errorEnNombre && React.createElement(
                            "div",
                            { className: "alert alert-danger", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 93
                                },
                                __self: this
                            },
                            "Nombre incorrecto"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            },
                            __self: this
                        },
                        React.createElement(
                            "label",
                            { htmlFor: "apellidos", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 97
                                },
                                __self: this
                            },
                            "Apellidos"
                        ),
                        React.createElement("input", { className: "form-control", type: "text", name: "apellidos", id: "apellidos",
                            value: this.state.apellidos,
                            onChange: this.leerCampo,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                            },
                            __self: this
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 103
                            },
                            __self: this
                        },
                        React.createElement(
                            "label",
                            { htmlFor: "comentarios", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 104
                                },
                                __self: this
                            },
                            "Comentarios"
                        ),
                        React.createElement("textarea", { className: "form-control", name: "comentarios", id: "comentarios",
                            value: this.state.comentarios,
                            onChange: this.leerCampo,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 105
                            },
                            __self: this
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 110
                            },
                            __self: this
                        },
                        React.createElement(
                            "label",
                            { htmlFor: "provincia", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 111
                                },
                                __self: this
                            },
                            "Provincia"
                        ),
                        React.createElement(
                            "select",
                            { className: "form-control", type: "text", name: "provincia", id: "provincia",
                                value: this.state.provincia,
                                onChange: this.leerCampo,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 112
                                },
                                __self: this
                            },
                            React.createElement(
                                "option",
                                { value: "01", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 116
                                    },
                                    __self: this
                                },
                                "Provincia 01"
                            ),
                            React.createElement(
                                "option",
                                { value: "02", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 117
                                    },
                                    __self: this
                                },
                                "Provincia 02"
                            ),
                            React.createElement(
                                "option",
                                { value: "03", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 118
                                    },
                                    __self: this
                                },
                                "Provincia 03"
                            ),
                            React.createElement(
                                "option",
                                { value: "04", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 119
                                    },
                                    __self: this
                                },
                                "Provincia 04"
                            ),
                            React.createElement(
                                "option",
                                { value: "05", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 120
                                    },
                                    __self: this
                                },
                                "Provincia 05"
                            ),
                            React.createElement(
                                "option",
                                { value: "06", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 121
                                    },
                                    __self: this
                                },
                                "Provincia 06"
                            ),
                            React.createElement(
                                "option",
                                { value: "07", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 122
                                    },
                                    __self: this
                                },
                                "Provincia 07"
                            ),
                            React.createElement(
                                "option",
                                { value: "08", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 123
                                    },
                                    __self: this
                                },
                                "Provincia 08"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 126
                            },
                            __self: this
                        },
                        React.createElement(
                            "button",
                            { type: "button", onClick: this.enviar, className: "btn btn-primary", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 127
                                },
                                __self: this
                            },
                            "Enviar"
                        )
                    )
                )
            );
        }
    }]);

    return Formulario;
}(React.Component);

ReactDOM.render(React.createElement(Formulario, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 136
    },
    __self: this
}), document.querySelector("div#contenedor"));
//# sourceMappingURL=04_intro.js.map