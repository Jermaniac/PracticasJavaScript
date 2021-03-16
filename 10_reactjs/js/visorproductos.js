var _jsxFileName = "jsx/visorproductos.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var VisorProductos = function (_React$Component) {
    _inherits(VisorProductos, _React$Component);

    function VisorProductos(props) {
        _classCallCheck(this, VisorProductos);

        return _possibleConstructorReturn(this, (VisorProductos.__proto__ || Object.getPrototypeOf(VisorProductos)).call(this, props));
    }

    // Utilizamos la etiqueta onClick para poder hacer uso del metodo del component padre Aplicacion
    // {()=>this.props.onCompra(producto)} le pasamos el producto como parametro


    _createClass(VisorProductos, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return this.props.productos.map(function (producto, indice) {
                return React.createElement(
                    "div",
                    { className: "card shadow m-4", key: producto.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        },
                        __self: _this2
                    },
                    React.createElement(
                        "div",
                        { className: "car-body m-4", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            },
                            __self: _this2
                        },
                        React.createElement(
                            "h4",
                            { className: "card-title", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                },
                                __self: _this2
                            },
                            producto.nombre
                        ),
                        React.createElement(
                            "h5",
                            { className: "card-text", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                },
                                __self: _this2
                            },
                            producto.precio,
                            " \u20AC"
                        ),
                        !_this2.props.carrito.has(producto.id) && React.createElement(
                            "button",
                            { className: "btn btn-primary",
                                onClick: function onClick() {
                                    return _this2.props.onCompra(producto);
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                },
                                __self: _this2
                            },
                            "Comprar"
                        )
                    )
                );
            });
        }
    }]);

    return VisorProductos;
}(React.Component);
//# sourceMappingURL=visorproductos.js.map