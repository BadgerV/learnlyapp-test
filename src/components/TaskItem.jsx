"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./styles/taskItem.module.css";

const TaskItem = () => {
  const type = "pending";
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

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
    if (type === "pending") {
      return "#f0ad4e";
    }
    return "black";
  };

  return (
    <div
      className={styles.task__item}
      style={{ border: `1px solid ${returnBorderColor()}` }}
    >
      <div className={styles.task__item_left}>
        <span className={styles.task__item_left__name}>Segunmaru Faozan</span>
        <span className={styles.task__item_left__desc}>
          Aliquip ea aliquip nostrud
        </span>
        <div className={styles.task__item_left__time}>
          <img src="/assets/clock-icon.png" alt="T" />
          <span>2h ago</span>
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
            <span>Edit</span>
            <span>Delete</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
