import React from "react";
import ReactDOM from "react-dom";

import { App } from "./src/App";
import { CreatedElement } from "./src/createElement";
import { Welcome } from "./src/component";
import { PureWelcome } from "./src/pureComponent";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(CreatedElement, document.getElementById("root-1"));
ReactDOM.render(<Welcome special={"my props"}/>, document.getElementById("root-2"));
ReactDOM.render(<PureWelcome />, document.getElementById("root-3"));

