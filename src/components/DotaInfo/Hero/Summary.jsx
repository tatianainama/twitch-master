import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";

export const Summary = ({ hero }) => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryHeader}>
        <img src={imageAPI.hero.portrait(hero.n)} />
        <div className={styles.summaryHeaderHero}>
          <h2>{hero.player}</h2>
          <p>
            Lvl <strong>{hero.level}</strong> {hero.name}
          </p>
        </div>
      </div>
      <div className={styles.abilitiesList}>
        {hero.abilities.map((_) => (
          <Ability data={_} key={_.n} />
        ))}
      </div>
    </div>
  );
};

export const Ability = ({ data }) => {
  return (
    <div>
      <img
        src={imageAPI.hero.ability(data.n)}
        style={{ maxWidth: `100%`, maxHeight: `100%`, objectFit: "cover" }}
      />
    </div>
  );
};
