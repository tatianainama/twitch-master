
import styles from "./live.module.css";

const Inventory = ({inventory}) => {
  return (
    <section className={styles.liveSection}>
        {inventory.items.map(item =>
        <>
          <img src={`https://dotatooltips.b-cdn.net/items/${item.n.replace("item_", "")}_png.png`}/>
          <b>{item.name}</b>
        </>
        )}

    </section>
  );
};

export default Inventory;
