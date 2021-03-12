var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "jsx/01_intro.jsx";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Crear componentes en react

var componenteLiteral = React.createElement(
    "h1",
    {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        },
        __self: this
    },
    "Expresion JSX ",
    2 + 2
);

// Enchufarlo en la pagina

ReactDOM.render(componenteLiteral, document.querySelector("div#contenedor"));

// Componente como funcion
// CONVENCION: NOMBRES COMPONENTES REACT EN MAYUSCULAS
function VerFichaCliente(props) {

    var ficha = React.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            },
            __self: this
        },
        React.createElement(
            "h5",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                },
                __self: this
            },
            props.datos.nombre,
            " ",
            props.datos.apellidos
        ),
        React.createElement(
            "h6",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                },
                __self: this
            },
            props.datos.correo
        )
    );

    if (props.modo == "resumen") {
        ficha = React.createElement(
            "h5",
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                },
                __self: this
            },
            props.datos.nombre,
            " ",
            props.datos.apellidos
        );
    }
    // className se usa para referenciar clases
    // Es necesario devolverlo con return
    return React.createElement(
        "div",
        { className: "card", __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            },
            __self: this
        },
        React.createElement(
            "div",
            { className: "card-header", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                },
                __self: this
            },
            "Ficha de cliente"
        ),
        React.createElement(
            "div",
            { className: "card-body", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                },
                __self: this
            },
            ficha
        )
    );
}

var datosCliente = {
    nombre: "German",
    apellidos: "Gonzalez",
    correo: "correofalso@gmail.com"
};

ReactDOM.render(
// Con esto volcamos el componente en la pagina
// como la variable se llama datos, le asignamos entre corchetes el dato
// Vamos a incorporar una propiedad que no existia antes "modo"
// si ponemos a "resumen" entra en el bucle if y no pone el correo
// si lo quitamos sale todo
React.createElement(VerFichaCliente, { datos: datosCliente, modo: "resumen", __source: {
        fileName: _jsxFileName,
        lineNumber: 50
    },
    __self: this
}), document.querySelector("div#prueba1"));

// Componente como clase
// Es necesario extender de React.Component

var VerFichaCurso = function (_React$Component) {
    _inherits(VerFichaCurso, _React$Component);

    function VerFichaCurso(props) {
        _classCallCheck(this, VerFichaCurso);

        return _possibleConstructorReturn(this, (VerFichaCurso.__proto__ || Object.getPrototypeOf(VerFichaCurso)).call(this, props));
    }

    _createClass(VerFichaCurso, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { className: "card-header", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                        },
                        __self: this
                    },
                    this.props.datos.nombre,
                    " "
                ),
                React.createElement(
                    "div",
                    { className: "card-body", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        },
                        __self: this
                    },
                    React.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            },
                            __self: this
                        },
                        this.props.datos.descripcion
                    ),
                    React.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            },
                            __self: this
                        },
                        this.props.datos.duracion
                    )
                )
            );
        }
    }]);

    return VerFichaCurso;
}(React.Component);

;

var datosCurso = {
    nombre: "ReactJS",
    duracion: 8,
    descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, voluptatibus"
};

ReactDOM.render(React.createElement(VerFichaCurso, { datos: datosCurso, __source: {
        fileName: _jsxFileName,
        lineNumber: 81
    },
    __self: this
}), document.querySelector("div#prueba2"));
//# sourceMappingURL=01_intro.js.map