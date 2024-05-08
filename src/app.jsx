import { Live } from "./components/Live";
import { VODList } from "./components/VODList";
import { Navigation } from "./components/Navigation";
import { Control } from "./components/Control";
import { Routes, Route, Outlet } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Live />} />
        <Route path="vod" element={<VODList />} />
      </Route>
    </Routes>
  );
}

const Layout = () => {
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
        <Outlet />
      </div>
      <Control />
    </>
  );
};
