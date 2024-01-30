import { useSelector } from "react-redux";
import styles from "./styles/taskList.module.css";
import TaskItem from "./TaskItem";
import { useEffect } from "react";

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

// {
//   filteredList.length === 0 ? (
//     listOfTasks.length === 0 ? (
//       <span>No tasks yet</span>
//     ) : (
// listOfTasks.map((task, index) => {
//   return <TaskItem {...task} key={index} />;
// })
//     )
//   ) : (
//   filteredList.map((task, index) => {
//     return <TaskItem {...task} key={index} />;
//   })
// );
// }
