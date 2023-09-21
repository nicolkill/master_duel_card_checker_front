import React from "react";
import {PropTypes} from "prop-types";

const TYPES = {
  primary: "bg-primary-100",
  secondary: "bg-secondary-100",
  accent: "bg-accent-100",
  error: "bg-red-700",
  danger: "bg-orange-400",
}

function Alert({type, showAlert, alertCustomText, extraClasses, closeCallback, children}) {
  return (
    <p className={TYPES[type] + " text-white font-medium px-4 py-2 rounded-md " + extraClasses}>
      {closeCallback &&
      <button
        onClick={closeCallback}
        className="material-icons absolute right-8 hover:text-gray-400">
        close
      </button>
      }
      {showAlert &&
        <span className="text-xs text-gray-200">{alertCustomText}</span>
      }
      <div className="w-full">
        {children}
      </div>
    </p>
  );
}

Alert.propTypes = {
  closeCallback: PropTypes.func,
  showAlert: PropTypes.bool,
  extraClasses: PropTypes.string,
  alertCustomText: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
};

Alert.defaultProps = {
  type: "primary",
  alertCustomText: "Alert",
  showAlert: true,
  extraClasses: "",
};

export default Alert;
