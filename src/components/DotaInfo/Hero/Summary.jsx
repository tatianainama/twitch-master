import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";

export const Summary = ({ hero }) => {
  return (
    <div className={styles.heroDetailSummary}>
      <img src={imageAPI.hero.portrait(hero.n)} />
      {hero.name} {hero.player} {hero.level}
    </div>
  );
};
