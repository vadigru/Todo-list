import React from "react";
import Form from "../form/form.jsx";
import Tasks from "../tasks/tasks.jsx";
import PropTypes from "prop-types";

const Main = (props) => {
  const {tasks} = props;
  return (
    <main className="content">
      <div className="container">
        <Form />
        <Tasks tasks={tasks}/>
      </div>
    </main>
  );
};

Main.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};

export default Main;
