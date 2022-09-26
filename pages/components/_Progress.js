import styles from "./_Progress.module.css";

export default function Progress(props) {
  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.bar}`}
        style={{ width: `${props.progress * 100}%` }}
      ></div>
    </div>
  );
}
