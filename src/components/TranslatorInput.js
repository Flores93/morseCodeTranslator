import React from "react";
import PropTypes from "prop-types";

const TranslatorInput = ({
  value,
  onChange,
  onClick,
  fromMorse = true,
  translation,
}) => {
  return (
    <form onSubmit={onClick}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e, fromMorse)}
      />
      <button onClick={onClick}>Translate</button>
      <div>
        <h6>Translate:</h6>
        <span>{translation}</span>
      </div>
    </form>
  );
};

TranslatorInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  fromMorse: PropTypes.bool,
  translation: PropTypes.string,
};

export default TranslatorInput;
