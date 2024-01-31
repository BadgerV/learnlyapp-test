import styles from "../styles/taskForm.module.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createTask,
  setIDToBeDeleted,
  updateTask,
} from "@/lib/slices/TaskSlice";

import DeleteModal from "./DeleteModal";
import Select from "react-select";

import { options } from "@/utils/utils";
import { formValidation } from "@/utils/utils";
import { customStyles } from "@/utils/utils";

const TaskForm = ({
  setModal = "",
  id = -1,
  name = "",
  desc = "",
  task = "",
  status = "",
}) => {
  const dispatch = useDispatch();

  const [deleteModal, setDeleteModal] = useState(false);
  const [validation, setValidation] = useState(false);
  const [hasBeenCreated, setHasBeenCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    desc: desc,
    status: status,
    task: task,
  });

  //sets the hasbeencreated state based on the id passed || default id = -1
  useEffect(() => {
    if (id === -1) {
      setHasBeenCreated(false);
    } else {
      setHasBeenCreated(true);
    }
  }, [id]);

  //sets validation state
  useEffect(() => {
    setValidation(formValidation(formData));
  }, [formData]);

  //creates task
  const handleCreateTask = () => {
    if (formValidation(formData)) {
      dispatch(createTask(formData));
      setModal(false);
    }
  };

  //updates task
  const handleUpdateTask = () => {
    if (formValidation(formData)) {
      dispatch(updateTask({ id, formData }));
      setModal(false);
    }
  };

  //deletes tatsk
  const handleDelete = () => {
    setDeleteModal(true);
    dispatch(setIDToBeDeleted(id));
  };

  //handles change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handles chnage for react select
  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption,
    }));
  };

  return (
    <>
      {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} id={id} />}

      <div className={styles.task__form}>
        <div className={styles.task__form_container}>
          <div
            className={styles.task__form_cancel_cont}
            onClick={() => setModal(false)}
          >
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
            isSearchable={false}
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
              <button
                onClick={handleUpdateTask}
                disabled={!validation}
                className={styles.task__form_created__button_update__button}
              >
                Update Task
              </button>
              <button onClick={handleDelete}>Delete Task</button>
            </div>
          ) : (
            <div className={styles.task__form_not_created__button}>
              <button
                onClick={handleCreateTask}
                disabled={!validation}
                className={styles.task__form_created__button_add__button}
              >
                Add task
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskForm;
