var _jsxFileName = "jsx/visorcarrito.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var VisorCarrito = function (_React$Component) {
    _inherits(VisorCarrito, _React$Component);

    function VisorCarrito(props) {
        _classCallCheck(this, VisorCarrito);

        return _possibleConstructorReturn(this, (VisorCarrito.__proto__ || Object.getPrototypeOf(VisorCarrito)).call(this, props));
    }

    // 


    _createClass(VisorCarrito, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var compras = [];
            this.props.carrito.forEach(function (compra) {
                compras.push(React.createElement(
                    "li",
                    { className: "list-group-item", key: compra.ref.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        },
                        __self: _this2
                    },
                    React.createElement(
                        "span",
                        { className: "h4", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            },
                            __self: _this2
                        },
                        compra.ref.nombre
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-primary mx-4",
                            onClick: function onClick() {
                                return _this2.props.onQuitar(compra.ref);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            },
                            __self: _this2
                        },
                        "x"
                    )
                ));
            });

            // Si hay compras en carrito se pintan
            return compras.length ? React.createElement(
                "div",
                { className: "card my-4", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    },
                    __self: this
                },
                React.createElement(
                    "ul",
                    { className: "list-group list-group-flush", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26
                        },
                        __self: this
                    },
                    compras
                )
            ) : null;
        }
    }]);

    return VisorCarrito;
}(React.Component);
//# sourceMappingURL=visorcarrito.js.map