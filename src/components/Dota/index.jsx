import TalentTree from "../TalentTree";
import Skills from "../Skills";
import Inventory from "../Inventory";

import useDotaInfo from "../../hooks/useDotaInfo.js";

import styles from "./live.module.css";

const Dota = ({channel}) => {
  const { dotaInfo } = useDotaInfo(channel);
	  //<img src={`https://cdn.steamstatic.com/apps/dota2/images/heroes/${dotaInfo.n.replace("npc_dota_hero_", "")}_vert.jpg`}/>
  return dotaInfo ? (
    <section className={styles.liveSection}>
	  <img src={`https://dotatooltips.b-cdn.net/heroes/${dotaInfo.n}_png.png`}/>
	  <h2>{dotaInfo.name}</h2>
	  <TalentTree tree={dotaInfo.talent_tree.entries}></TalentTree>
	  <Skills skills={dotaInfo.abilities}></Skills>
	  <Inventory inventory={dotaInfo.inventory}></Inventory>
    </section>
  ) : <></>;
};

export default Dota;
