import scepterOn from "../../../../images/scepter_on.png";
import scepterOff from "../../../../images/scepter_off.png";
import shardOn from "../../../../images/shard_on.png";
import shardOff from "../../../../images/shard_off.png";
import styles from "./hero.module.css";
import { isNonNullish } from "remeda";
import Chip from "../../Chip";
import imageAPI from "./../imageAPI";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverTitle,
} from "./../../Popover";

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

export const Aghanim = ({ scepter, shard, size = "md", abilities }) => {
  const scepterAbility = abilities.find(
    (ability) => ability.has_scepter_upgrade || ability.granted_by_scepter
  );
  const shardAbility = abilities.find(
    (ability) => ability.has_shard_upgrade || ability.granted_by_shard
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className={styles.aghanim}>
          {isNonNullish(scepter) && <Scepter active={scepter} size={size} />}
          {isNonNullish(shard) && <Shard active={shard} size={size} />}
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeader>
          <div className={styles.aghanimPopoverHeader}>
            <Scepter active={scepter} size="sm" />
            <PopoverTitle>Aghanim&apos;s Scepter</PopoverTitle>
            <Chip color="space_cadet">
              {scepterAbility.has_scepter_upgrade ? "Upgrade" : "New ability"}
            </Chip>
          </div>
        </PopoverHeader>
        <Ability data={scepterAbility} />

        <PopoverHeader>
          <div className={styles.aghanimPopoverHeader}>
            <Shard active={shard} size="sm" />
            <PopoverTitle>Aghanim&apos;s Shard</PopoverTitle>
            <Chip color="space_cadet">
              {shardAbility?.has_shard_upgrade ? "Upgrade" : "New ability"}
            </Chip>
          </div>
        </PopoverHeader>
        <Ability data={shardAbility} />
      </PopoverContent>
    </Popover>
  );
};

const Ability = ({ data }) => (
  <div className={styles.aghanimAbility}>
    <img
      src={imageAPI.hero.ability(data.n)}
      style={{
        width: `3rem`,
        height: `3rem`,
        objectFit: "cover",
        display: `inline-block`,
      }}
    />
    <div>
      <h3>{data.name}</h3>
      <p>{data.tooltip.scepter_description || data.tooltip.description}</p>
    </div>
  </div>
);

const Scepter = ({ active, size }) => (
  <img
    src={active ? scepterOn : scepterOff}
    style={{ height: sizes[size].scepter, width: `auto` }}
  />
);

const Shard = ({ active, size }) => (
  <img
    src={active ? shardOn : shardOff}
    style={{ height: sizes[size].shard, width: `auto` }}
  />
);
