import styles from "../styles/taskModal.module.css";

import { returnColor } from "@/utils/utils";
import { timeAgo } from "@/utils/utils";

const TaskModal = ({ name, desc, task, status, createdAt, cancelModal }) => {
  return (
    <div
      className={styles.task__modal}
      style={{ backgroundColor: returnColor(status) }}
    >
      <div className={styles.task__modal_cont}>
        <div
          className={styles.task__modal_cancel_cont}
          onClick={() => cancelModal(false)}
        >
          <img src="/assets/cancel--icon.svg" alt="Cancel" />
        </div>
        <span className={styles.task__modal_name}>{name}</span>
        <div className={styles.task__modal__status_and_createdAt}>
          <span
            className={styles.task__modal_status}
            style={{ backgroundColor: returnColor(status) }}
          >
            {status}
          </span>

          <span>Created: {timeAgo(createdAt)}</span>
        </div>
        <span className={styles.task__modal_desc}>{desc}</span>
        <span className={styles.task__modal_task}>{task}</span>
      </div>
    </div>
  );
};

export default TaskModal;
