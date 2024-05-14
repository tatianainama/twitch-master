import { Summary } from "./Summary";
import { Inventory } from "./Inventory";
import styles from "./hero.module.css";

export const Hero = ({ data, showSkills }) => {
  return (
    <div className={styles.hero}>
      <Summary hero={data} showSkills={showSkills} />
      <Inventory hero={data} />
    </div>
  );
};
