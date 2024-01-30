import { useSelector } from "react-redux";
import styles from "./styles/infoBox.module.css";

const InfoBoxes = () => {
  const totalTasks = useSelector((state) => state.taskSlice.totalTasks);
  const totalPending = useSelector((state) => state.taskSlice.totalPending);
  const totalCompleted = useSelector((state) => state.taskSlice.totalCompleted);
  const totalUrgent = useSelector((state) => state.taskSlice.totalUrgent);
  return (
    <div className={styles.infoboxes}>
      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/list-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Total Tasks</span>
          <span>{totalTasks}</span>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/alarm-clock-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Pending Tasks</span>
          <span>{totalPending}</span>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/check-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Total Completed</span>
          <span>{totalCompleted}</span>
        </div>
      </div>

      <div className={styles.infobox}>
        <div className={styles.infobox__left}>
          <img src="/assets/profit-icon.svg" />
        </div>
        <div className={styles.infobox__right}>
          <span>Total Urgent</span>
          <span>{totalUrgent}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
