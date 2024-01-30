import styles from "./styles/taskForm.module.css";

import Select from "react-select";
import { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import {
  createTask,
  setIDToBeDeleted,
  updateTask,
} from "@/lib/slices/TaskSlice";

const options = [
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "urgent", label: "Urgent" },
  { value: "cancelled", label: "Cancelled" },
];

const TaskForm = ({
  setModal = "",
  id = -1,
  name = "",
  desc = "",
  task = "",
  status = "",
  setUpdateModal = "",
}) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: name,
    desc: desc,
    status: status,
    task: task,
  });

  const handleCreateTask = () => {
    dispatch(createTask(formData));
    setModal(false);
  };

  const handleUpdateTask = () => {
    dispatch(updateTask({ id, formData }));
    setUpdateModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption,
    }));
  };

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      height: "3rem",
    }),
    control: (provided, state) => ({
      ...provided,
      border: "none",
      outline: "none",
      boxShadow: "none",
      fontSize: "0.9rem",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "0.9rem",
    }),
    input: (provided, state) => ({
      ...provided,
      fontSize: "0.9rem",
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: "0.9rem",
    }),
  };
  const [hasBeenCreated, setHasBeenCreated] = useState(false);

  useEffect(() => {
    if (id === -1) {
      setHasBeenCreated(false);
    } else {
      setHasBeenCreated(true);
    }
  }, []);

  const handleCancel = () => {
    setModal !== "" && setModal(false);
    setUpdateModal !== "" && setUpdateModal(false);
  };

  const handleDelete = () => {
    setDeleteModal(true);
    dispatch(setIDToBeDeleted(id));
  };
  return (
    <>
      {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} id={id} />}

      <div className={styles.task__form}>
        <div className={styles.task__form_container}>
          <div className={styles.task__form_cancel_cont} onClick={handleCancel}>
            <img src="/assets/cancel--icon.svg" alt="Cancel" />
          </div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Description"
            value={formData.desc}
            name="desc"
            onChange={handleChange}
          />

          <Select
            options={options}
            value={formData.status}
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, { name: "status" })
            }
            placeholder="Select an option"
            isSearchable={false} // Optional: Disable search input
            styles={customStyles}
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            placeholder="Task"
            name="task"
            value={formData.task}
            onChange={handleChange}
          ></textarea>
          {hasBeenCreated ? (
            <div className={styles.task__form_created__button}>
              <button onClick={handleUpdateTask}>Update Task</button>
              <button onClick={handleDelete}>Delete Task</button>
            </div>
          ) : (
            <div className={styles.task__form_not_created__button}>
              <button onClick={handleCreateTask}>Add task</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskForm;
