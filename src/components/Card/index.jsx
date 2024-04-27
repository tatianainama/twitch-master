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
  footer,
  ...props
}) => (
  <div className={[styles.card2, className].join(" ").trim()} {...props}>
    <Tag className={[styles.card, className].join(" ").trim()}>
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
    {footer && <div className={styles.card__footer}>{footer}</div>}
  </div>
);

export default Card;
