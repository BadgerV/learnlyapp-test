import styles from "./styles/taskForm.module.css";

import Select from "react-select";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const options = [
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
  { value: "urgent", label: "Urgent" },
  { value: "cancelled", label: "Cancelled" },
];

const TaskForm = ({ setModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
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

  const hassbeencreated = true;

  return (
    <>
      {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} />}

      <div className={styles.task__form}>
        <div className={styles.task__form_container}>
          <div
            className={styles.task__form_cancel_cont}
            onClick={() => setModal(false)}
          >
            <img src="/assets/cancel--icon.svg" alt="Cancel" />
          </div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Description" />

          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            placeholder="Select an option"
            isSearchable={false} // Optional: Disable search input
            styles={customStyles}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Task"
          ></textarea>
          {hassbeencreated ? (
            <div className={styles.task__form_created__button}>
              <button>Update Task</button>
              <button onClick={() => setDeleteModal(true)}>Delete Task</button>
            </div>
          ) : (
            <div className={styles.task__form_not_created__button}>
              <button>Add task</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskForm;
