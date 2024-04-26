import { Link } from "preact-router/match";
import { Radio, Film, Power } from "../Icons";
import styles from "./navigation.module.css";

export function Navigation({targets, target, onTargetChange}) {
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
        <select onchange={(ev) => onTargetChange(ev.target.value)}>
	      {targets ? targets.map(t => (
			  <option value={t} selected={target == t}>{t}</option>
		  )) : <></>
		  }
        </select>
      </div>
    </nav>
  );
}
