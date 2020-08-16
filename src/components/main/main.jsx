import React from "react";
import Form from "../form/form.jsx";
import Tasks from "../tasks/tasks.jsx";
import PropTypes from "prop-types";

const Main = (props) => {
  const {
    tasks,
    onSubmitButtonClick,
    onDeleteButtonClick
  } = props;

  return (
    <main className="content">
      <div className="container">
        <Form onSubmitButtonClick={onSubmitButtonClick}/>
        <Tasks
          tasks={tasks}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      </div>
    </main>
  );
};

Main.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  onSubmitButtonClick: PropTypes.func.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired
};

export default Main;
