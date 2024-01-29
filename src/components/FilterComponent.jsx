"use client";

import { useState } from "react";
import styles from "./styles/filterComponent.module.css";

const FilterComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    console.log("Worker");
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
          <span onClick={handleClick}>Pending</span>
          <span onClick={handleClick}>Completed</span>
          <span onClick={handleClick}>Urgent</span>
          <span onClick={handleClick}>Cancelled</span>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
