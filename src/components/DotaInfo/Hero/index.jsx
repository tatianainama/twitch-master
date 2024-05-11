import { Summary } from "./Summary";
import { Inventory } from "./Inventory";
import styles from "./hero.module.css";

export const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <Summary hero={data} />
      <Inventory hero={data} />
    </div>
  );
};
