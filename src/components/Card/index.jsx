import Chip from "../Chip";
import styles from "./card.module.css";

const Card = ({
  title,
  description,
  category,
  color,
  children,
  Tag = "div",
  media,
  actions,
  className,
  ...props
}) => (
  <Tag className={[styles.card, className].join(" ").trim()} {...props}>
    {media && (
      <img
        src={media}
        width={34}
        height={34}
        className={styles.card__media}
        loading="lazy"
        alt=""
      />
    )}
    <div className={styles.card__content}>
      {title && (
        <h3 className={styles.card__content__title}>
          {title} {category && <Chip color={color}>{category}</Chip>}
        </h3>
      )}
      {description && (
        <p className={styles.card__content__description} title={description}>
          {description}
        </p>
      )}
      {children}
    </div>
    {actions && <div className={styles.card__actions}>{actions}</div>}
  </Tag>
);

export default Card;
