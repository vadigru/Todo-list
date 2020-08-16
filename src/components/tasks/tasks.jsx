import React from "react";
import Task from "../task/task.jsx";
import PropTypes from "prop-types";

const Tasks = (props) => {
  const {
    tasks,
    onDeleteButtonClick
  } = props;

  return (
    <ul className="tasks">
      {tasks.map((item, index) => (
        <Task
          key={item + index}
          task={item}
          onDeleteButtonClick={() => onDeleteButtonClick(index)}
        />
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default Tasks;
