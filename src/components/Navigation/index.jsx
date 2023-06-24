import { Link } from "preact-router/match";
import { Radio, Film, Power } from "../Icons";
import styles from "./navigation.module.css";
import { useState } from "preact/hooks";
import { setPowerOn, setPowerOff } from "../../api";

export function Navigation() {
  const [togglePower, setTogglePower] = useState(true);

  const handlePower = () => {
    togglePower ? setPowerOff() : setPowerOn();
    setTogglePower(!togglePower);
  };

  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} activeClassName={styles.active} href="/">
        <Radio size={20} />
        Live
      </Link>
      <Link
        className={styles.navLink}
        activeClassName={styles.active}
        href="/vod"
      >
        <Film size={18} />
        VoD
      </Link>
      <div>
        <button onClick={handlePower}>
          <Power size={20} />
        </button>
      </div>
    </nav>
  );
}
