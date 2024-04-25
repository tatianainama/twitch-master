import TalentTree from "../TalentTree";
import Skills from "../Skills";
import Inventory from "../Inventory";

import useDotaInfo from "../../hooks/useDotaInfo.js";

import styles from "./live.module.css";
// https://dotatooltips.b-cdn.net/hero_videos/npc_dota_hero_marci.webm
// https://dotatooltips.b-cdn.net/hero_miniicons/npc_dota_hero_marci_png.png
const DotaHero = (dotaInfo) => {
	return <section className={styles.liveSection}>
	  <img src={`https://dotatooltips.b-cdn.net/hero_icons/${dotaInfo.n}_png.png`}/>
	  <h2>{dotaInfo.name}</h2>
	  <TalentTree tree={dotaInfo.talent_tree.entries}></TalentTree>
	  <Skills skills={dotaInfo.abilities}></Skills>
	  <Inventory inventory={dotaInfo.inventory}></Inventory>
    </section>
};
const Dota = ({user_login}) => {
	const { dotaInfo } = useDotaInfo(user_login);
	console.log(dotaInfo);
	if (dotaInfo  == null) {
		return <></>;
	}
	if (dotaInfo.type == "single") {
		return DotaHero(dotaInfo.data);
	}
	if (dotaInfo.type == "multiple") {
		return <>
			{dotaInfo.data.map(h => DotaHero(h))}
			</>;
	}
	return <></>;
};

export default Dota;
