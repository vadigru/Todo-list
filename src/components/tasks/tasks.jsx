import React from "react";
import Task from "../task/task.jsx";
import PropTypes from "prop-types";

const Tasks = (props) => {
  const {
    tasks,
    onTaskClick,
    onDeleteButtonClick
  } = props;

  return (
    <ul className="tasks">
      {tasks.map((item, index) => (
        <Task
          key={item + index}
          task={item}
          onTaskClick={() => onTaskClick(item, index)}
          onDeleteButtonClick={() => onDeleteButtonClick(index)}
        />
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
        tasks: PropTypes.string,
        isActive: PropTypes.bool
      })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default Tasks;
