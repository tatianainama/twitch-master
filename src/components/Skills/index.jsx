
import styles from "./live.module.css";

//	  skills {JSON.stringify(skills)}
//	 <img src={`https://courier.spectral.gg/images/dota/spellicons/${skill.n}.png`}/>
const Skills = ({skills}) => {
  return (
    <section className={styles.liveSection}>
	  {skills.map(skill => 
		  <>
		  <img src={`https://dotatooltips.b-cdn.net/spellicons/${skill.n}_png.png`}/>
		  <b>{skill.name}</b>
		  {skill.tooltip.description}
		  <br/>
		  </>
	  )
	  }
    </section>
  );
};

export default Skills;
