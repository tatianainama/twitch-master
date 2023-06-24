import Card from "../Card";
import Button from "../Button";
import { Grid, Play, Stop, Plus, Minus, Cast } from "../Icons";
import Chip from "../Chip";
import useStreamingList from "../../hooks/useStreamingList";
import useCasted from "../../hooks/useCasted";

import styles from "./live.module.css";
import {
  castStream,
  stopPlaying,
  kodiIncreaseVolume,
  kodiDecreaseVolume,
  setSourceKodi,
  setSourceCC,
} from "../../api";

export function Live() {
  const { streaming } = useStreamingList();
  const { casting, setCasting } = useCasted();
  return (
    <>
      <section className={styles.liveSection}>
        <h2>Streaming now</h2>
        {streaming && (
          <ul className={styles.cardGroup}>
            {streaming.map(({ user_name, avatar, title, game_name, color }) => (
              <Card
                tag="li"
                key={user_name}
                color={color}
                media={avatar}
                title={user_name}
                category={game_name}
                description={title}
                actions={
                  <Button
                    onClick={() => castStream(user_name).then(setCasting)}
                  >
                    <Play size={24} />
                  </Button>
                }
              />
            ))}
          </ul>
        )}
      </section>

      <section className={styles.remoteControl}>
        <div className={styles.control}>
          <div className={styles.controlGroup}>
            <button onClick={kodiIncreaseVolume}>
              <Plus size={24} />
            </button>
            <span>VOL</span>
            <button onClick={kodiDecreaseVolume}>
              <Minus size={24} />
            </button>
          </div>
          <div className={styles.controlGroup}>
            <button onClick={setSourceKodi}>
              <Grid size={18} />
            </button>
            <span>SRC</span>
            <button onClick={setSourceCC}>
              <Cast size={24} />
            </button>
          </div>
        </div>
        <div
          className={`${styles.remoteControlCasting} ${
            !casting ? styles.nothingCasting : ""
          }`}
        >
          {casting ? (
            <>
              <div>
                <h3>
                  {casting.user_name}{" "}
                  <Chip color={casting.color}>{casting.game_name}</Chip>
                </h3>
                <p>{casting.title}</p>
              </div>
              <Button onClick={() => stopPlaying().then(setCasting(null))}>
                <Stop size={20} />
              </Button>
            </>
          ) : (
            <>
              <div>
                <p>Nothing casting (ㅠ︵ㅠ)</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
