import { deleteTask } from "@/lib/slices/TaskSlice";
import styles from "./styles/deleteModal.module.css";
import { useDispatch, useSelector } from "react-redux";

const DeleteModal = ({ setDeleteModal, id = -1 }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id)
    dispatch(deleteTask(id));
    setDeleteModal(false);
  };

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

        <button onClick={handleDelete}>Delete Task</button>
      </div>
    </div>
  );
};

export default DeleteModal;
