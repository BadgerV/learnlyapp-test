import styles from "./styles/infoBox.module.css";

const InfoBoxes = () => {
  return (
    <div className={styles.infoboxes}>
      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/list-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Total Tasks</span>
          <span>5</span>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/alarm-clock-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Pending Tasks</span>
          <span>5</span>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/check-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Total Tasks</span>
          <span>5</span>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/profit-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Total Tasks</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
