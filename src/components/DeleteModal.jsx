import styles from "./styles/deleteModal.module.css";

const DeleteModal = ({ setDeleteModal }) => {
  return (
    <div className={styles.delete__modal}>
      <div className={styles.delete__modal_cont}>
        <div
          className={styles.delete__modal_cancel_cont}
          onClick={() => setDeleteModal(false)}
        >
          <img src="/assets/cancel--icon.svg" alt="Cancel" />
        </div>

        <span>Are you sure you want to delete this task?</span>

        <button>Delete Task</button>
      </div>
    </div>
  );
};

export default DeleteModal;
