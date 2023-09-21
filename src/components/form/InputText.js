import React from 'react';
import {PropTypes} from "prop-types";

function formatId(name) {
  return `${name}-field`;
}

function InputText({value, name, extraClasses, placeholder, type, required, changeCallback}) {
  const handleChange = (event) => {
    changeCallback(event.target.name, event.target.value);
  };
  return (
    <div>
      <label htmlFor={formatId(name)} className="sr-only">{placeholder}</label>
      <input id={formatId(name)}
             onChange={handleChange}
             value={value}
             name={name}
             type={type}
             required={required}
             className={`${extraClasses} appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-100 focus:border-primary-100 focus:z-10 sm:text-sm`}
             placeholder={placeholder}/>
    </div>
  );
}

InputText.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email"]),
  required: PropTypes.bool,
  extraClasses: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeCallback: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  value: "",
  extraClasses: "",
  type: "text",
  required: false,
};

export default InputText;
