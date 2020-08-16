import React from "react";
import Form from "../form/form.jsx";
import Tasks from "../tasks/tasks.jsx";
import PropTypes from "prop-types";

const Main = (props) => {
  const {
    tasks,
    onTaskClick,
    onSubmitButtonClick,
    onDeleteButtonClick
  } = props;

  return (
    <main className="content">
      <div className="container">
        <Form onSubmitButtonClick={onSubmitButtonClick}/>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      </div>
    </main>
  );
};

Main.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
        tasks: PropTypes.string,
        isActive: PropTypes.bool
      })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onSubmitButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default Main;
