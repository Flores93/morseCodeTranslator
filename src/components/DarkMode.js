import React from "react";
import PropTypes from "prop-types";

const DarkMode = ({ status, handleMode }) => {
  const handleClick = () => {
    !status ? localStorage.setItem("darkmode", "ON") : localStorage.clear();
    handleMode((s) => !s);
  };

  return (
    <i
      className={`pointer fas ${!status ? "fa-moon" : "fa-sun"} fa-2x`}
      onClick={handleClick}
    ></i>
  );
};

DarkMode.propTypes = {
  status: PropTypes.bool,
  handleMode: PropTypes.func,
};

export default DarkMode;
