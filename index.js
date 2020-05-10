import React from "react";
import ReactDOM from "react-dom";

import App from "./src/App";
import CreatedHeader from "./src/createElement";
import Component from "./src/component";
import PureComponent from "./src/pureComponent";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(CreatedHeader, document.getElementById("root-1"));
ReactDOM.render(<Component special={"my props"}/>, document.getElementById("root-2"));
ReactDOM.render(<PureComponent />, document.getElementById("root-3"));

