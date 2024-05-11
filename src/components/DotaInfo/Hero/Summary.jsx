import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";
import { TalentTree } from "./TalentTree";
import { Aghanim } from "./Aghanim";
export const Summary = ({ hero }) => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryHeader}>
        <div className={styles.summaryHeaderPortrait}>
          <img src={imageAPI.hero.portrait(hero.n)} />
        </div>
        <div className={styles.summaryHeaderHero}>
          <h2>{hero.player}</h2>
          <p>
            Lvl <strong>{hero.level}</strong> {hero.name}
          </p>
        </div>
        <TalentTree />
        <Aghanim scepter={false} shard={false} />
      </div>
      <div className={styles.abilities}>
        <div className={styles.abilitiesList}>
          {hero.abilities.map((_) => (
            <Ability data={_} key={_.n} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Ability = ({ data }) => {
  return (
    <div>
      <img
        src={imageAPI.hero.ability(data.n)}
        style={{ width: `3rem`, height: `3rem`, objectFit: "cover" }}
      />
    </div>
  );
};