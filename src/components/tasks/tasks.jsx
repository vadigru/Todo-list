import React from "react";
import Task from "../task/task.jsx";
import PropTypes from "prop-types";

const Tasks = (props) => {
  const {tasks} = props;

  return (
    <ul className="tasks">
      {tasks.map((item, index) => (
        <Task
          key={item + index}
          task={item}
        />
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};

export default Tasks;
