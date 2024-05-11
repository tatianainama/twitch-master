import styles from "./live.module.css";

const TalentTree = ({ tree }) => {
  return (
    <section className={styles.liveSection}>
      {tree.map((items) => (
        <>
          {items.map((item) =>
            item.picked ? <b>{item.name}</b> : <span>{item.name}</span>
          )}
          <br />
        </>
      ))}
    </section>
  );
};

export default TalentTree;
