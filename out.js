System.register("index", ["react", "react-dom"], function (exports_1, context_1) {
    "use strict";
    var React, ReactDOM;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            }
        ],
        execute: function () {
            ReactDOM.render(React.createElement("div", null,
                React.createElement("h1", null, "Hello, Welcome to React and TypeScript")), document.getElementById("root"));
        }
    };
});
