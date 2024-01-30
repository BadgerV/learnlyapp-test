"use client";

import { useState } from "react";
import styles from "./styles/filterComponent.module.css";
import { useDispatch } from "react-redux";
import { filterTasks } from "@/lib/slices/TaskSlice";

const FilterComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (filterBy) => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__visible} onClick={handleClick}>
        <span>Filter</span>
        <img src="/assets/filter-icon.png" alt="Filter" />
      </div>
      {modalOpen && (
        <div className={styles.filter__not_visible}>
          <span
            onClick={() => {
              dispatch(filterTasks("pending"));
              handleClick();
            }}
          >
            Pending
          </span>
          <span
            onClick={() => {
              dispatch(filterTasks("completed"));
              handleClick();
            }}
          >
            Completed
          </span>
          <span
            onClick={() => {
              dispatch(filterTasks("urgent"));
              handleClick();
            }}
          >
            Urgent
          </span>
          <span
            onClick={() => {
              dispatch(filterTasks("cancelled"));
              handleClick();
            }}
          >
            Cancelled
          </span>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
