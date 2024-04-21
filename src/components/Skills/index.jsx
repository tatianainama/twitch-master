
import styles from "./live.module.css";

//	  skills {JSON.stringify(skills)}
const Skills = ({skills}) => {
  return (
    <section className={styles.liveSection}>
	  {skills.map(skill => 
		  <>
		  <img src={`https://courier.spectral.gg/images/dota/spellicons/${skill.n}.png`}/>
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
