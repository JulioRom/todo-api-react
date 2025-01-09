import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

const TaskList = ({ tasks, onUpdateTask,onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-muted">No tasks available</p>;
  }

  return (
    <ul className="list-group mt-3">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onUpdateTask: PropTypes.func.isRequired
  };

export default TaskList;
