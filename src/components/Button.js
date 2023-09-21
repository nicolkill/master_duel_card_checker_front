import React from "react";
import {PropTypes} from "prop-types";

const TYPES = {
  primary: "text-white bg-primary-100 hover:bg-primary-200 transition-all",
  secondary: "text-white bg-secondary-100 hover:bg-secondary-200 transition-all",
  accent: "text-white bg-accent-100 hover:bg-accent-200 transition-all",
  error: "text-white bg-red-700 hover:bg-red-600 transition-all",
  danger: "text-white bg-orange-400 hover:bg-orange-300 transition-all",
  link: "text-primary-100 hover:underline ",
  disabled: "text-gray-600 bg-gray-200 cursor-not-allowed",
}

const SIZES = {
  big: "text-lg",
  normal: "text-sm",
  small: "text-xs",
}

function Button({type, buttonType, size, extraClasses, callback, link, children}) {
  const params = {};
  if (type !== "disabled") {
    if (buttonType === "button") {
      params.onClick = callback;
    }
    if (buttonType === "link") {
      params.onClick = () => {
        window.open(link);
      };
    }
  }
  return (
    <button
      type={buttonType}
      className={TYPES[type] + " " + SIZES[size] + " font-medium flex items-center justify-center px-4 py-2 border border-transparent rounded-md " + extraClasses}
      {...params}>
      {children}
    </button>
  );
}

Button.propTypes = {
  callback: PropTypes.func,
  extraClasses: PropTypes.string,
  link: PropTypes.string,
  buttonType: PropTypes.oneOf(["button", "submit", "link"]),
  type: PropTypes.oneOf(Object.keys(TYPES)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Button.defaultProps = {
  buttonType: "button",
  type: "primary",
  size: "normal",
  link: "",
  extraClasses: ""
};

export default Button;
