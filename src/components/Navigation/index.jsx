import { Link } from "preact-router/match";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} href="/">
        Home
      </Link>
      <Link className={styles.navLink} href="/vod">
        VOD
      </Link>
    </nav>
  );
}
