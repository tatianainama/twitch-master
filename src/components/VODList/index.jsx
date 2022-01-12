import { VOD } from "../VOD";
import useVOD from "../../hooks/useVOD";
import styles from "./vodlist.module.css";

export function VODList() {
  const { vods } = useVOD();

  return (
    <>
      {vods &&
        Object.keys(vods).map((username) => {
          const userVods = vods[username];

          return (
            <>
              <p>{username}</p>
              <div className={styles.VODList}>
                {userVods.map((vod) => (
                  <VOD className={styles.VOD} key={vod.id} vod={vod} />
                ))}
              </div>
            </>
          );
        })}
    </>
  );
}
