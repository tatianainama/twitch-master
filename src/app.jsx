import { Live } from "./components/Live";
import { VODList } from "./components/VODList";
import { Navigation } from "./components/Navigation";
import { Control } from "./components/Control";
import { Routes, Route, Outlet } from "react-router-dom";
import useTargetList from "./hooks/useTargetList";
import { useState} from "react";


export function App() {
  const { targets } = useTargetList();
  const [target, setTarget] = useState("Kodi");
  return (
    <Routes>
      <Route path="/" element={<Layout setTarget={setTarget} targets={targets} />}>
        <Route index element={<Live target={target} />} />
        <Route path="vod" element={<VODList />} />
      </Route>
    </Routes>
  );
}

const Layout = ({targets, setTarget}) => {
  return (
    <>
      <Navigation targets={targets} onTargetChange={setTarget} />
      <div
        style={{
          minHeight: 0,
          overflowY: `auto`,
          overflowX: `hidden`,
          padding: `0 1rem`,
        }}
      >
        <Outlet />
      </div>
      <Control />
    </>
  );
};
