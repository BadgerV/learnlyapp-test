import styles from "./styles/taskList.module.css";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const array = [1, 2, 3, 4, 5,6,7,8,9,0,9,8,7,6,5];
  return (
    <div className={styles.task__list}>
      {array.map(() => {
        return <TaskItem />;
      })}
    </div>
  );
};

export default TaskList;
