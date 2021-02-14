import styles from "./spinner.module.scss";
export default function Spinner({ text }) {
  return (
    <div className={styles.spinner} data-testid="loading">
      <div>
        <div className={styles.ldsDualRing}></div>
        <h2>{text}</h2>
      </div>
    </div>
  );
}
