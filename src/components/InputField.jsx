import { useState } from "react";
import PropTypes from "prop-types";

const InputField = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      className="form-control mt-3"
      placeholder="Add a new task"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

InputField.propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

export default InputField;
