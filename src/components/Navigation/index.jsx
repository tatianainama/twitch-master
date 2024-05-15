import { NavLink } from "react-router-dom";
import { Radio, Film } from "../Icons";
import styles from "./navigation.module.css";

export function Navigation({targets, onTargetChange}) {
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
        <select onChange={(ev) => {console.log("change to", ev.target.value); onTargetChange(ev.target.value)}} defaultValue="Kodi">
	      {targets ? targets.map(t => (
			  <option value={t} key={t}>{t}</option>
		  )) : <></>
		  }
        </select>
      </div>
    </nav>
  );
}
