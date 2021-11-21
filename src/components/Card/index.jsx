import styles from './card.module.css';
import CastIcon from '../Icons/Cast';
import ServerIcon from '../Icons/Server';

const Card = ({title, description, children, Tag = 'div', media, ...props}) => (
  <Tag className={styles.card} {...props}>
    {media 
      ?
        <img src={media} width={34} height={34} className={styles.card__media} loading="lazy" alt=""/>
      : <div className={styles.card__media_placeholder}></div>
    }
    <div className={styles.card__content}>
      <h3 className={styles.card__content__title}>{title}</h3>
      <p className={styles.card__content__description}>{description}</p>
      {children}
    </div>
    <div className={styles.card__actions}>
      <button className={styles.card__actions__cast}>
        <CastIcon size={24} />
      </button>
      <button className={styles.card__actions__server}>
        <ServerIcon size={24} />
      </button>
    </div>
  </Tag>
);

export default Card;
