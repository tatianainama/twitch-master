import styles from "./hero.module.css";
import { isNonNullish } from "remeda";
const sizes = {
  md: {
    scepter: `28px`,
    shard: `14px`,
  },
  sm: {
    scepter: `16px`,
    shard: `12px`,
  },
};

export const Aghanim = ({ scepter, shard, size = "md" }) => {
  return (
    <div className={styles.aghanim}>
      {isNonNullish(scepter) && (
        <img
          src={`images/scepter_${scepter ? "on" : "off"}.png`}
          style={{ height: sizes[size].scepter, width: `auto` }}
        />
      )}
      {isNonNullish(shard) && (
        <img
          src={`images/shard_${shard ? "on" : "off"}.png`}
          style={{ height: sizes[size].shard, width: `auto` }}
        />
      )}
    </div>
  );
};
