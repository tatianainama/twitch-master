import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";
import { fill } from "../../../utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverSubtitle,
  PopoverTitle,
} from "./../../Popover";

const INVENTORY_SIZE = 6;
export const Inventory = ({ hero }) => {
  const inventoryItems = fill(hero.inventory.items, INVENTORY_SIZE, null);

  return (
    <div className={styles.inventory}>
      <div className={styles.inventoryGrid}>
        {inventoryItems.map((item, i) =>
          item ? <Item data={item} key={i} /> : <Empty key={i} />
        )}
        <NeutralItem data={hero.inventory.neutral_slot} ratio={1} />
      </div>
    </div>
  );
};

const Item = ({ data, ratio = 3 / 2 }) => {
  const itemId = data.n.replace(`item_`, ``);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <AspectRatio.Root ratio={ratio}>
          <img
            src={imageAPI.item(itemId)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </AspectRatio.Root>
      </PopoverTrigger>
      <PopoverContent>
        <div className={styles.inventoryGridItemContent}>
          <div className={styles.inventoryGridItemHeader}>
            <PopoverTitle>{data.name}</PopoverTitle>
            <PopoverSubtitle>
              {data.manacost && (
                <>
                  <img
                    src="images/mana.png"
                    className={styles.inventoryGridItemUseIcon}
                  />
                  {data.manacost}
                </>
              )}
              {data.cooldown && (
                <>
                  <img
                    src="images/cd.png"
                    className={styles.inventoryGridItemUseIcon}
                  />{" "}
                  {data.cooldown}
                </>
              )}{" "}
              {data.cost && data.cost !== "0" && (
                <>
                  <img
                    src="images/icon_gold.png"
                    className={styles.inventoryGridItemUseIcon}
                  />{" "}
                  {data.cost}
                </>
              )}{" "}
            </PopoverSubtitle>
          </div>
          <p className={styles.inventoryGridItemContentDescription}>
            {/* TODO: Get better item description */}
            Ex ex veniam amet ex ut. Eu labore dolor nulla mollit aliquip est
            laborum mollit nisi tempor incididunt. Velit qui laboris
            exercitation eu dolore commodo non. Sit commodo culpa occaecat
            occaecat nulla. Enim sint cupidatat duis proident incididunt mollit
            consectetur aute ullamco id in est cillum. Occaecat irure cupidatat
            tempor cillum do pariatur.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const Empty = () => <div className={styles.inventoryGridEmptyItem} />;

const NeutralItem = ({ data }) => {
  return (
    <div className={styles.inventoryGridNeutralItemContainer}>
      {data && (
        <div className={styles.inventoryGridNeutralItem}>
          <Item data={data} ratio={1 / 1} />
        </div>
      )}
    </div>
  );
};
