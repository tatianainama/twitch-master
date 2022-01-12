import styles from "./chip.module.css";

const Chip = ({ color = "uranianBlue", ...props }) => (
  <span className={[styles.chip, styles[color]].join(" ")}>
    {props.children}
  </span>
);

export const ChipColors = [
  "uranianBlue",
  "iceberg",
  "middleBluePurple",
  "plum",
  "pansyPurple",
  "blueBell",
  "spaceCadet",
  "purpleNavy",
];

export default Chip;
