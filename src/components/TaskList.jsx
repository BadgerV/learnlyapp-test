import styles from "../styles/taskList.module.css";

import { useSelector } from "react-redux";

import TaskItem from "./TaskItem";

const TaskList = () => {
  const listOfTasks = useSelector((state) => state.taskSlice.lisOfTasks);
  const filteredList = useSelector((state) => state.taskSlice.filteredList);
  const filterType = useSelector((state) => state.taskSlice.filterType);

  return (
    <div className={styles.task__list}>
      {filterType === "" && listOfTasks.length === 0 ? (
        <span className={styles.task__list_span}>No tasks yet</span>
      ) : filterType !== "" ? (
        filteredList.length === 0 ? (
          <span className={styles.task__list_span}>
            There are currently no {filterType} tasks
          </span>
        ) : (
          filteredList.map((task, index) => {
            return <TaskItem {...task} key={index} />;
          })
        )
      ) : (
        listOfTasks.map((task, index) => {
          return <TaskItem {...task} key={index} />;
        })
      )}
    </div>
  );
};

export default TaskList;
