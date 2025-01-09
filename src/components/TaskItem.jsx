import PropTypes from "prop-types";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        ID: {task.id} - {task.label} - {task.is_done ? "Completed" : "Pending"}
      </span>
      <button className="btn btn-sm btn-primary" onClick={() => onUpdateTask(task.id)}>
        ↻
      </button>
      <button className="btn btn-sm btn-danger" onClick={() => onDeleteTask(task.id)}>
        ✖
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string.isRequired,
    is_done: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired
};

export default TaskItem;
