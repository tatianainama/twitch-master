import styles from './card.module.css';

const Card = ({children, Tag = 'div', media, ...props}) => (
  <Tag className={styles.card} {...props}>
    {media 
      ?
        <img src={media} width={34} height={34} className={styles.card__media} loading="lazy" alt=""/>
      : <div className={styles.card__media_placeholder}></div>
    }
    <div className={styles.card__placeholder}>
      {children}
    </div>
  </Tag>
);

export default Card;
