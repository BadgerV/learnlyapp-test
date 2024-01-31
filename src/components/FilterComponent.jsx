"use client";

import styles from "../styles/filterComponent.module.css";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { filterTasks } from "@/lib/slices/TaskSlice";
import { capitalizeFirstLetter } from "@/utils/utils";

const FilterComponent = () => {
  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.taskSlice.filterType);

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter__visible} onClick={handleClick}>
        <span>
          {filterType === "" ? "Filter" : capitalizeFirstLetter(filterType)}
        </span>
        <img src="/assets/filter-icon.png" alt="Filter" />
      </div>
      {modalOpen && (
        <div className={styles.filter__not_visible}>
          <span
            onClick={() => {
              dispatch(filterTasks(""));
              handleClick();
            }}
          >
            No filter
          </span>
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
