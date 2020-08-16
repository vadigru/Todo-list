import React from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  const {
    task,
    onDeleteButtonClick
  } = props;

  return (
    <li className="tasks__item">
      {task}
      <button className="tasks__delete" onClick={onDeleteButtonClick}>
        <img src="img/icons8-delete.svg" alt="delete" />
      </button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default Task;
