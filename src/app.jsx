import { useState } from "preact/hooks";
import Router from "preact-router";
import { Live } from "./components/Live";
import { VODList } from "./components/VODList";
import { Navigation } from "./components/Navigation";
import { Control } from "./components/Control";
import useTargetList from "./hooks/useTargetList";

export function App() {
  const [target, setTarget] = useState("Kodi");
  const { targets } = useTargetList();
  return (
    <>
      <Navigation targets={targets} target={target} onTargetChange={setTarget} />
      <div
        style={{
          minHeight: 0,
          overflowY: `auto`,
          overflowX: `hidden`,
          padding: `0 1rem`,
        }}
      >
        <Router>
          <Live path="/" target={target} />
          <VODList path="/vod" />
        </Router>
      </div>
      <Control />
    </>
  );
}
