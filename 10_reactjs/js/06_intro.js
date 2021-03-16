var _jsxFileName = "jsx/06_intro.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { VisorClientes } from "./visorclientes.js";

var TablaClientes = function (_React$Component) {
    _inherits(TablaClientes, _React$Component);

    function TablaClientes(props) {
        _classCallCheck(this, TablaClientes);

        // this.clientes = [];

        // this.state = {
        //     nombre: "German",
        //     apellidos: "",
        //     comentarios: "",
        //     provincia : "",
        //     errorEnNombre: false
        // }
        var _this = _possibleConstructorReturn(this, (TablaClientes.__proto__ || Object.getPrototypeOf(TablaClientes)).call(this, props));

        _this.state = {
            items: []
        };
        return _this;
    }

    _createClass(TablaClientes, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // Devuelve una promesa
            fetch("http://localhost:3000/clientes").then(function (respuesta) {
                if (respuesta.ok) {
                    console.log("Invocacion correcta.");
                    respuesta.json().then(function (resp) {
                        _this2.setState({
                            items: resp
                            // Esto seria necesario en caso de que lo hubiera puesto fuera del state
                            // this.forceUpdate
                        });
                    });
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
                alert("Error al intentar invocacion por AJAX.\n" + JSON.stringify(razon));
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    },
                    __self: this
                },
                React.createElement(VisorClientes, { clientes: this.state.items, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    },
                    __self: this
                })
            );
        }
    }]);

    return TablaClientes;
}(React.Component);

ReactDOM.render(React.createElement(TablaClientes, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 71
    },
    __self: this
}), document.querySelector("div#contenedor"));
//# sourceMappingURL=06_intro.js.map