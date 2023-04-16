import { Link } from "preact-router/match";
import styles from "./control.module.css";
import Button from "../Button";

import {
  setSourceKodi,
  setSourceCC,
  setPowerOn,
  setPowerOff,
} from "../../api";

export function Control() {
  return (
        <section>
	  <h2>Power</h2>
          <div className={styles.castedActions}>
            <Button onClick={setPowerOn}>ON</Button>
            <Button onClick={setPowerOff}>OFF</Button>
          </div>
	  <h2>Source</h2>
          <div className={styles.castedActions}>
            <Button onClick={setSourceKodi}>Kodi</Button>
            <Button onClick={setSourceCC}>CC</Button>
          </div>
        </section>
  );
}

