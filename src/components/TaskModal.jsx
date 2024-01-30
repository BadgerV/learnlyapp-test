import styles from "./styles/taskModal.module.css";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TaskModal = ({ name, desc, task, status, createdAt, cancelModal }) => {
  const returnBackgroundColor = () => {
    if (status === "pending") {
      return "#f0ad4e";
    } else if (status === "completed") {
      return "#28a745";
    } else if (status === "cancelled") {
      return "#dc3545";
    } else if (status === "urgent") {
      return "#007bff";
    }
    return "black";
  };

  // Function to convert to "30 mins ago" format
  function timeAgo(timestamp) {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }

  return (
    <div
      className={styles.task__modal}
      style={{ backgroundColor: returnBackgroundColor() }}
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
            style={{ backgroundColor: returnBackgroundColor() }}
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
