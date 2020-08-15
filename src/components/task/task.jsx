import React from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  const {task} = props;
  return (
    <li className="tasks__item">
      {task}
      <button className="tasks__delete">
        <img src="img/icons8-delete.svg" alt="delete" />
      </button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired
};

export default Task;
