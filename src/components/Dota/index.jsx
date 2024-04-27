import useDotaInfo from "../../hooks/useDotaInfo.js";

import styles from "./live.module.css";
// https://dotatooltips.b-cdn.net/hero_videos/npc_dota_hero_marci.webm
// https://dotatooltips.b-cdn.net/hero_miniicons/npc_dota_hero_marci_png.png
const HeroSummary = (dotaInfo) => {
    return <>
      <img className={styles.heroPortrait} src={`https://dotatooltips.b-cdn.net/hero_icons/${dotaInfo.n}_png.png`}/>
      <div className={styles.heroInfo}>
        <a href={`https://liquipedia.net/dota2/${dotaInfo.player}`} target="_blank">
          <b>{dotaInfo.player}</b>
        </a>
        <span>Lvl <b>{dotaInfo.level}</b> {dotaInfo.name}</span>
      </div>
        <div className={styles.inventory}>
          {dotaInfo.inventory.items.map(item =>
            <img 
              alt={item.name}
              src={`https://dotatooltips.b-cdn.net/items/${item.n.replace("item_", "")}_png.png`}
              />
          )}
        </div>
          {dotaInfo.inventory.neutral_slot ?
            <img
              className={styles.neutralItem}
              src={`https://dotatooltips.b-cdn.net/items/${dotaInfo.inventory.neutral_slot.n.replace("item_", "")}_png.png`}
              alt={dotaInfo.inventory.neutral_slot.name}
              />
              :
            <div></div>
          }
    </>
};
const Dota = ({user_login}) => {
    const { dotaInfo } = useDotaInfo(user_login);
    if (dotaInfo  == null) {
        return <></>;
    }
    if (dotaInfo.type == "single") {
        return HeroSummary(dotaInfo.data);
    }
    if (dotaInfo.type == "multiple") {
        return (
            <div className={styles.dotaScoreBoard}>
                {dotaInfo.data.map(h => HeroSummary(h))}
            </div>
        );
    }
    return <></>;
};

export default Dota;
