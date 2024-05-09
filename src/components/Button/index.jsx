import styles from "./button.module.css";
import { forwardRef } from "react";

const Button = forwardRef(({ children, ...props }, ref) => (
  <button className={styles.button} {...props} ref={ref}>
    {children}
  </button>
));

export default Button;
