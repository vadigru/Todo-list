import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const {tasks} = props;
  const activeTasks = tasks.filter((task) => task.isActive);
  return (
    <header className="header">
      <h1 className="header__title">TODO</h1>
      <h2 className="header__tasks-count">You have {activeTasks.length} task/s</h2>
    </header>
  );
};

Header.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.shape({
        tasks: PropTypes.string,
        isActive: PropTypes.bool
      })
  ).isRequired
};

export default Header;
