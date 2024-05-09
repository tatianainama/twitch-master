import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";

export const Inventory = ({ hero }) => {
  return (
    <div className={styles.heroDetailInventory}>
      {hero.inventory.items.map((item, i) => (
        <Item data={item} key={i} />
      ))}
    </div>
  );
};

const Item = ({ data }) => {
  const itemId = data.n.replace(`item_`, ``);

  return (
    <AspectRatio.Root ratio={3 / 2}>
      <img
        src={imageAPI.item(itemId)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AspectRatio.Root>
  );
};
