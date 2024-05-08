import { NavLink } from "react-router-dom";
import { Radio, Film, Power } from "../Icons";
import styles from "./navigation.module.css";
import { useState } from "react";
import { setPowerOn, setPowerOff } from "../../api";

export function Navigation() {
  const [togglePower, setTogglePower] = useState(true);

  const handlePower = () => {
    togglePower ? setPowerOff() : setPowerOn();
    setTogglePower(!togglePower);
  };

  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.active : ""}`
        }
        to="/"
      >
        <Radio size={20} />
        Live
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.navLink} ${isActive ? styles.active : ""}`
        }
        to="/vod"
      >
        <Film size={18} />
        VoD
      </NavLink>
      <div>
        <button onClick={handlePower}>
          <Power size={20} />
        </button>
      </div>
    </nav>
  );
}
