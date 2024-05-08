import styles from "./control.module.css";
import Button from "../Button";
import useCasted from "../../hooks/useCasted";
import { Grid, Plus, Minus, Cast, VolumeX, Cancel } from "../Icons";
import Chip from "../Chip";
import {
  setSourceKodi,
  stopPlaying,
  kodiIncreaseVolume,
  kodiDecreaseVolume,
  setSourceCC,
} from "../../api";

export function Control() {
  const { casting, setCasting } = useCasted();

  return (
    <section className={styles.remoteControl}>
      <div className={styles.control}>
        <div className={styles.controlGroup}>
          <button onClick={setSourceKodi}>
            <Grid size={18} />
          </button>
          <span>SRC</span>
          <button onClick={setSourceCC}>
            <Cast size={24} />
          </button>
        </div>
        <div className={styles.controlGroup}>
          {/* TODO: Missing API */}
          <button>
            <VolumeX size={18} />
          </button>
          <button onClick={kodiDecreaseVolume}>
            <Minus size={24} />
          </button>
          <button onClick={kodiIncreaseVolume}>
            <Plus size={24} />
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
              <Cancel size={20} />
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
  );
}
