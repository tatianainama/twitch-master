import useDotaInfo from "../../hooks/useDotaInfo.js";

import styles from "./live.module.css";
// https://dotatooltips.b-cdn.net/hero_videos/npc_dota_hero_marci.webm
// https://dotatooltips.b-cdn.net/hero_miniicons/npc_dota_hero_marci_png.png
const HeroSummary = (dotaInfo) => {
  return (
    <>
      <img
        className={styles.heroPortrait}
        src={`https://dotatooltips.b-cdn.net/hero_miniicons/${dotaInfo.n}_png.png`}
      />
      <div className={styles.heroInfo}>
        <a
          href={`https://liquipedia.net/dota2/${dotaInfo.player}`}
          target="_blank"
        >
          <b>{dotaInfo.player}</b>
        </a>
        <span className={styles.heroLevel}>
          Lvl <b>{dotaInfo.level}</b> {dotaInfo.name}
        </span>
      </div>
      <div className={styles.inventory}>
        {dotaInfo.inventory.items.map((item) => (
          <img
            alt={item.name}
            src={`https://dotatooltips.b-cdn.net/items/${item.n.replace(
              "item_",
              ""
            )}_png.png`}
          />
        ))}
      </div>
      {dotaInfo.inventory.neutral_slot ? (
        <img
          className={styles.neutralItem}
          src={`https://dotatooltips.b-cdn.net/items/${dotaInfo.inventory.neutral_slot.n.replace(
            "item_",
            ""
          )}_png.png`}
          alt={dotaInfo.inventory.neutral_slot.name}
        />
      ) : (
        <div></div>
      )}
      <div className={styles.aghsShard}>
        <img
          src={`images/scepter_${dotaInfo.has_aghs ? "on" : "off"}.png`}
        ></img>
        <img
          src={`images/shard_${dotaInfo.has_shard ? "on" : "off"}.png`}
        ></img>
      </div>
    </>
  );
};
const HeroDetail = (dotaInfo) => {
  return (
    <div className={styles.heroDetail}>
      <h3>
        <img
          className={styles.heroPortrait}
          src={`https://dotatooltips.b-cdn.net/hero_miniicons/${dotaInfo.n}_png.png`}
        />
        {dotaInfo.name}
      </h3>
      <div className={styles.firstRow}>
        <div className={styles.inventory}>
          {dotaInfo.inventory.items.map((item) => (
            <img
              alt={item.name}
              src={`https://dotatooltips.b-cdn.net/items/${item.n.replace(
                "item_",
                ""
              )}_png.png`}
            />
          ))}
        </div>
        {dotaInfo.inventory.neutral_slot ? (
          <img
            className={styles.neutralItem}
            src={`https://dotatooltips.b-cdn.net/items/${dotaInfo.inventory.neutral_slot.n.replace(
              "item_",
              ""
            )}_png.png`}
            alt={dotaInfo.inventory.neutral_slot.name}
          />
        ) : (
          <img
            className={[styles.neutralItem, styles.bw]}
            src={`https://dotatooltips.b-cdn.net/items/tier1_token_png.png`}
            alt="No item yet"
          />
        )}
        <div className={styles.aghsShard}>
          <img
            src={`images/scepter_${dotaInfo.has_aghs ? "on" : "off"}.png`}
          ></img>
          <img
            src={`images/shard_${dotaInfo.has_shard ? "on" : "off"}.png`}
          ></img>
        </div>
      </div>
      <div className={styles.skills}>
        {dotaInfo.abilities.map((ability) => (
          <img
            alt={ability.name}
            src={`https://dotatooltips.b-cdn.net/spellicons/${ability.n}_png.png`}
          />
        ))}
      </div>
    </div>
  );
};
const Dota = ({ user_login }) => {
  const { dotaInfo } = useDotaInfo(user_login);
  if (dotaInfo == null) {
    return <></>;
  }

  if (dotaInfo.type == "single") {
    return HeroDetail(dotaInfo.data);
  }
  if (dotaInfo.type == "multiple") {
    return (
      <summary>
        <details>
          <h2>Radiant</h2>
          <div className={styles.dotaScoreBoard}>
            {dotaInfo.data.slice(0, 5).map((h) => HeroSummary(h))}
          </div>
          <h2>Dire</h2>
          <div className={styles.dotaScoreBoard}>
            {dotaInfo.data.slice(5, 10).map((h) => HeroSummary(h))}
          </div>
        </details>
      </summary>
    );
  }
  return <></>;
};

export default Dota;
