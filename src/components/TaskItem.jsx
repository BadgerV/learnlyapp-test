"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./styles/taskItem.module.css";
import TaskModal from "./TaskModal";
import TaskForm from "./TaskForm";
import format from "date-fns/format";
import DeleteModal from "./DeleteModal";

import { useDispatch } from "react-redux";
import { setIDToBeDeleted } from "@/lib/slices/TaskSlice";

const TaskItem = ({ name, desc, status, task, createdAt, id }) => {
  const [modal, setModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const modalRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const handleModalClick = (e) => {
    // Prevent the event from propagating to the document
    e.stopPropagation();
    setModal(!modal);
  };

  const handleOutsideClick = (e) => {
    // Close the modal if the click occurs outside the modal
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  const returnBorderColor = () => {
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

  const convertStatusToOption = (status) => {
    const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);
    return {
      value: status,
      label: formattedStatus,
    };
  };

  // Function to convert to "Wed, 24 Feb 2024" format
  function formatDate(timestamp) {
    return format(timestamp, "EEE, dd MMM yyyy");
  }

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
          setUpdateModal={setUpdateModal}
        />
      )}

      {deleteModal && <DeleteModal id={id} setDeleteModal={setDeleteModal} />}

      <div
        onClick={() => setTaskModal(true)}
        className={styles.task__item}
        style={{ border: `2px solid ${returnBorderColor()}` }}
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
