"use client";

import Sidebar from "@/components/SideBar";
import styles from "../styles/page.module.css";
import FilterComponent from "@/components/FilterComponent";
import InfoBoxes from "@/components/InfoBoxes";
import TaskList from "@/components/TaskList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "@/components/TaskForm";
import { setListOfTasks, setTimeCreated } from "@/lib/slices/TaskSlice";
import { formatDate } from "@/utils/utils";

export default function Home() {
  const [addModalState, setAddModalState] = useState(false);
  const dispatch = useDispatch();

  let timeCreated, listOfTasks;

  useEffect(() => {
    listOfTasks = JSON.parse(window.localStorage.getItem("listOfTasks"));
    timeCreated = window.localStorage.getItem("timeCreated");
  }, []);

  //get time created from rToolkit state
  const createdTime = useSelector((state) => state.taskSlice.timeCreated);

  useEffect(() => {
    // If listOfTasks is not null, dispatch the action to set it
    if (listOfTasks !== null) {
      dispatch(setListOfTasks(listOfTasks));
    }

    // If timeCreated is not null, dispatch the action to set it
    if (timeCreated !== null) {
      dispatch(setTimeCreated(timeCreated));
    } else {
      // If timeCreated is null, dispatch the action to set the current time
      const currentTime = Date.now();
      dispatch(setTimeCreated(currentTime));
      window.localStorage.setItem("timeCreated", currentTime);
    }
  }, []);

  useEffect(() => {
    console.log(timeCreated);
  }, [timeCreated]);

  return (
    <main className={styles.main}>
      <div className={styles.main__left}>
        <Sidebar />
      </div>
      <div className={styles.main__right}>
        <span className={styles.product_name}>Teachmate Task Manager</span>
        <span className={styles.created__at_text}>
          {createdTime
            ? `Created on: ${formatDate(+createdTime)}`
            : "Loading..."}
        </span>

        <div className={styles.pages__infoboxes}>
          <InfoBoxes />
        </div>

        <div className={styles.filter__container}>
          <FilterComponent />
        </div>

        <div className={styles.tasks}>
          <span className={styles.tasks__span}>Tasks</span>
          <TaskList />
          <div className={styles.tasks__container}></div>
        </div>
      </div>

      <div
        className={styles.add__button}
        onClick={() => setAddModalState(!addModalState)}
      >
        <img src="/assets/add-icon.svg" alt="Add Task" />
      </div>

      {addModalState && <TaskForm setModal={setAddModalState} />}
    </main>
  );
}
