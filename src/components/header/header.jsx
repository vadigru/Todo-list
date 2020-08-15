import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const {tasks} = props;
  return (
    <header className="header">
      <h1 className="header__title">TODO</h1>
      <h2 className="header__tasks-count">You have {tasks.length} task/s</h2>
    </header>
  );
};

Header.propTypes = {
  tasks: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired
};

export default Header;
