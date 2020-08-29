import React from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  const {
    task,
    onTaskClick,
    onDeleteButtonClick
  } = props;

  return (
    <li className={`tasks__item ${task.isActive ? `` : `tasks__item--done`}`}>
      <input type="checkbox" defaultChecked={!task.isActive} onClick={onTaskClick}/>
      <span className="tasks__title" >
        {task.task}
      </span>
      <button className="tasks__delete" onClick={onDeleteButtonClick}>
        <img src="img/icons8-delete.svg" alt="delete" />
      </button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string,
    isActive: PropTypes.bool
  }).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default Task;
