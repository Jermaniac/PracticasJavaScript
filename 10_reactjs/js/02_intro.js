var _jsxFileName = "jsx/02_intro.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Metodos del ciclo de vida de un componente React

// Recordar que la convencion de componentes en React es con mayusculas
var ProbarMetodosCicloDeVida = function (_React$Component) {
    _inherits(ProbarMetodosCicloDeVida, _React$Component);

    // Por convencion los argumentos se denominan props
    function ProbarMetodosCicloDeVida(props) {
        _classCallCheck(this, ProbarMetodosCicloDeVida);

        var _this = _possibleConstructorReturn(this, (ProbarMetodosCicloDeVida.__proto__ || Object.getPrototypeOf(ProbarMetodosCicloDeVida)).call(this, props));

        console.log("Constructor del componente/clase ProbarMetodosCicloDeVida....");
        return _this;
    }

    // Esto solo se llama una vez
    // DESPUES DE AÑADIRLO AL DOM


    _createClass(ProbarMetodosCicloDeVida, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount ProbarMetodosCicloDeVida....");
        }

        // Se ejecuta cada vez que se muestra el componente

    }, {
        key: "render",
        value: function render() {
            console.log("render ProbarMetodosCicloDeVida....");

            return React.createElement(
                "div",
                { className: "jumbotron", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    },
                    __self: this
                },
                React.createElement(
                    "h1",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        },
                        __self: this
                    },
                    "Componente para probar ciclo de vida"
                ),
                React.createElement(
                    "p",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        },
                        __self: this
                    },
                    "Desaparece en 3 segundos"
                )
            );
        }

        // Se ejecuta despues de cada render

    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            console.log("componentDidupdate ProbarMetodosCicloDeVida");
        }

        // Se ejecuta antes de cada render

    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate() {
            console.log("componentWillUpdate ProbarMetodosCicloDeVida");
        }

        // Se ejecuta justo antes de quitar el componente del DOM

    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount ProbarMetodosCicloDeVida");
        }
    }]);

    return ProbarMetodosCicloDeVida;
}(React.Component);

;

ReactDOM.render(React.createElement(ProbarMetodosCicloDeVida, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 48
    },
    __self: this
}), document.querySelector("div#contenedor"));

// Vamos a desmontar el componente dentro de 3 segundos
setInterval(function () {
    return ReactDOM.unmountComponentAtNode(document.querySelector("div#contenedor"));
}, 3000);
//# sourceMappingURL=02_intro.js.map