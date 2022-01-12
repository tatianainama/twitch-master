import useVOD from "../../hooks/useVOD";
import { castVOD } from "../../api";
import Card from "../Card";
import styles from "./vodlist.module.css";

export function VODList() {
  const { vods } = useVOD();
  return (
    <div>
      {vods &&
        Object.keys(vods).map((username) => {
          const userVods = vods[username];
          return (
            <div key={username} className={styles.vodUserContainer}>
              <h2>{username}</h2>
              <div className={styles.vodList}>
                {userVods.map((vod) => (
                  <Card
                    className={styles.vodCard}
                    key={vod.id}
                    onClick={() => castVOD(vod.id)}
                  >
                    <div className={styles.vodImageContainer}>
                      {vod.thumbnail_url ? (
                        <img
                          src={vod.thumbnail_url
                            .replace("%{width}", 160)
                            .replace("%{height}", 90)}
                        />
                      ) : (
                        <div className={styles.vodImagePlaceholder}></div>
                      )}
                      <p className={styles.vodDuration}>{vod.duration}</p>
                    </div>
                    <p>{vod.title}</p>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
