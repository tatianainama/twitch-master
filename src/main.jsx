import { render } from "preact";
import { App } from "./app";
import "./preflight.css";
import "./index.css";

render(<App />, document.getElementById("app"));
