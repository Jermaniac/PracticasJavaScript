var _jsxFileName = "jsx/05_intro.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { VisorProductos } from "./visorproductos.js";
import { VisorCarrito } from "./visorcarrito.js";

var Aplicacion = function (_React$Component) {
    _inherits(Aplicacion, _React$Component);

    function Aplicacion(props) {
        _classCallCheck(this, Aplicacion);

        var _this = _possibleConstructorReturn(this, (Aplicacion.__proto__ || Object.getPrototypeOf(Aplicacion)).call(this, props));

        _this.comprar = function (producto) {
            _this.setState(function (estadoAnterior, propiedadesAnteriores) {
                estadoAnterior.carrito.set(producto.id, { cantidad: 1, ref: producto });
                return {
                    carrito: estadoAnterior.carrito
                };
            });
        };

        _this.quitar = function (producto) {
            _this.setState(function (estadoAnterior, propiedadesAnteriores) {

                estadoAnterior.carrito.delete(producto.id);
                return {
                    carrito: estadoAnterior.carrito
                };
            });
        };

        _this.state = {

            productos: [],
            carrito: new Map()
        };
        return _this;
    }

    _createClass(Aplicacion, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var catalog = [];
            for (var i = 1; i <= 12; i++) {
                catalog.push({
                    id: i,
                    nombre: "Producto " + i,
                    precio: Math.random() * 500.0,
                    iva: 21.0
                });
            }

            this.setState({
                productos: catalog
            });
        }

        // lo defino aqui porque es el padre y lo puedo pasar por props a visorproductos.jsx

    }, {
        key: "render",


        // En este caso hemos definido dos metodos comprar y quitar.
        // Para poder usarlos en los componentes hijos los pasamos utilizando una etiqueta por defecto on...={..}
        value: function render() {
            return React.createElement(
                "div",
                { className: "jumbotron", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { className: "row", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "col", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66
                            },
                            __self: this
                        },
                        React.createElement(VisorProductos, { productos: this.state.productos,
                            carrito: this.state.carrito,
                            onCompra: this.comprar,

                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 67
                            },
                            __self: this
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "col", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            },
                            __self: this
                        },
                        React.createElement(VisorCarrito, { carrito: this.state.carrito, onQuitar: this.quitar, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            },
                            __self: this
                        })
                    )
                )
            );
        }
    }]);

    return Aplicacion;
}(React.Component);

ReactDOM.render(React.createElement(Aplicacion, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 84
    },
    __self: this
}), document.querySelector("div#contenedor"));
//# sourceMappingURL=05_intro.js.map