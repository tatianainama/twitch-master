import { Link } from "preact-router/match";
import { Radio, Film } from "../Icons";
import styles from "./navigation.module.css";

export function Navigation() {
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
    </nav>
  );
}
