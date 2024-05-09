import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";
import { fill } from "../../../utils";

const INVENTORY_SIZE = 6;
export const Inventory = ({ hero }) => {
  const inventoryItems = fill(hero.inventory.items, INVENTORY_SIZE, null);

  return (
    <div className={styles.inventory}>
      {inventoryItems.map((item, i) =>
        item ? <Item data={item} key={i} /> : <Empty key={i} />
      )}
      <NeutralItem data={hero.inventory.neutral_slot} ratio={1} />
    </div>
  );
};

const Item = ({ data, ratio = 3 / 2 }) => {
  const itemId = data.n.replace(`item_`, ``);
  return (
    <AspectRatio.Root ratio={ratio}>
      <img
        src={imageAPI.item(itemId)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AspectRatio.Root>
  );
};

const Empty = () => <div className={styles.inventoryEmptyItem} />;

const NeutralItem = ({ data }) => {
  return (
    <div className={styles.inventoryNeutralItemContainer}>
      {data && (
        <div className={styles.inventoryNeutralItem}>
          <Item data={data} ratio={1 / 1} />
        </div>
      )}
    </div>
  );
};