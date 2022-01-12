import Router from "preact-router";
import { Live } from "./components/Live";
import { VODList } from "./components/VODList";
import { Navigation } from "./components/Navigation";

export function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Live path="/" />
        <VODList path="/vod" />
      </Router>
    </>
  );
}
