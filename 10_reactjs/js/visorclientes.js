var _jsxFileName = "jsx/visorclientes.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var VisorClientes = function (_React$Component) {
    _inherits(VisorClientes, _React$Component);

    function VisorClientes(props) {
        _classCallCheck(this, VisorClientes);

        return _possibleConstructorReturn(this, (VisorClientes.__proto__ || Object.getPrototypeOf(VisorClientes)).call(this, props));
    }

    _createClass(VisorClientes, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "table",
                { className: "table table-striped table-dark", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    },
                    __self: this
                },
                React.createElement(
                    "thead",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        },
                        __self: this
                    },
                    React.createElement(
                        "tr",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            },
                            __self: this
                        },
                        React.createElement(
                            "th",
                            { scope: "col", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                },
                                __self: this
                            },
                            "id"
                        ),
                        React.createElement(
                            "th",
                            { scope: "col", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 13
                                },
                                __self: this
                            },
                            "Nombre"
                        ),
                        React.createElement(
                            "th",
                            { scope: "col", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 14
                                },
                                __self: this
                            },
                            "Provincia"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        },
                        __self: this
                    },
                    this.props.clientes.map(function (item) {
                        return React.createElement(
                            "tr",
                            { key: item.id, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                },
                                __self: _this2
                            },
                            React.createElement(
                                "td",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 21
                                    },
                                    __self: _this2
                                },
                                item.id
                            ),
                            React.createElement(
                                "td",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 22
                                    },
                                    __self: _this2
                                },
                                item.nombre
                            ),
                            React.createElement(
                                "td",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    },
                                    __self: _this2
                                },
                                item.provincia
                            )
                        );
                    })
                )
            );
        }
    }]);

    return VisorClientes;
}(React.Component);
//# sourceMappingURL=visorclientes.js.map