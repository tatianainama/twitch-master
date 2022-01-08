import styles from './button.module.css';

const Button = ({ onClick, children }) => (
    <button onClick={() => onClick()} className={styles.button}>
        {children}
    </button>);

export default Button;