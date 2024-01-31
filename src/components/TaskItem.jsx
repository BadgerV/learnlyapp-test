"use client";

import styles from "../styles/taskItem.module.css";

import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import TaskModal from "./TaskModal";
import TaskForm from "./TaskForm";
import DeleteModal from "./DeleteModal";

import { setIDToBeDeleted } from "@/lib/slices/TaskSlice";
import { returnColor } from "@/utils/utils";
import { convertStatusToOption } from "@/utils/utils";
import { formatDate } from "@/utils/utils";

const TaskItem = ({ name, desc, status, task, createdAt, id }) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const modalRef = useRef(null);

  //handles outside click
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //handles modal click
  const handleModalClick = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  //handles outside click
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  //handles delete
  const handleDelete = () => {
    setDeleteModal(true);
    dispatch(setIDToBeDeleted(id));
  };

  return (
    <>
      {taskModal && (
        <TaskModal
          name={name}
          desc={desc}
          status={status}
          task={task}
          cancelModal={setTaskModal}
          createdAt={createdAt}
        />
      )}

      {updateModal && (
        <TaskForm
          id={id}
          status={convertStatusToOption(status)}
          name={name}
          desc={desc}
          task={task}
          setModal={setUpdateModal}
        />
      )}

      {deleteModal && <DeleteModal id={id} setDeleteModal={setDeleteModal} />}

      <div
        onClick={() => setTaskModal(true)}
        className={styles.task__item}
        style={{ border: `2px solid ${returnColor(status)}` }}
      >
        <div className={styles.task__item_left}>
          <span className={styles.task__item_left__name}>{name}</span>
          <span className={styles.task__item_left__desc}>{desc}</span>
          <div className={styles.task__item_left__time}>
            <img src="/assets/clock-icon.png" alt="T" />
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>
        <div
          className={styles.task__item_right}
          onClick={handleModalClick}
          ref={modalRef}
        >
          <img src="/assets/menu-icon.png" alt="Menu" />
          {modal && (
            <div className={styles.task__item_right__modal}>
              <span onClick={() => setUpdateModal(true)}>Edit</span>
              <span onClick={handleDelete}>Delete</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskItem;
