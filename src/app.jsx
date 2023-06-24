import Router from "preact-router";
import { Live } from "./components/Live";
import { VODList } from "./components/VODList";
import { Navigation } from "./components/Navigation";
import { Control } from "./components/Control";

export function App() {
  return (
    <>
      <Navigation />
      <div
        style={{
          minHeight: 0,
          overflowY: `auto`,
          overflowX: `hidden`,
          padding: `0 1rem`,
        }}
      >
        <Router>
          <Live path="/" />
          <VODList path="/vod" />
        </Router>
      </div>
      <Control />
    </>
  );
}
