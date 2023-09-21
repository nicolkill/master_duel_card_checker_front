import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {PropTypes} from "prop-types";

import useOutsideClick from "./behaviours/useOutsideClick";

function dropdownItem(item, index) {
  const classValues = {
    className: "block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition",
    role: "menuitem",
    tabIndex: "-1"
  };
  if (item.func) {
    const click = (event) => {
      event.preventDefault();
      item.func();
    }
    return <button onClick={click} key={index} {...classValues}>{item.text}</button>;
  }
  return <Link to={item.path} key={index} {...classValues}>{item.text}</Link>;
}

function Dropdown({extraClasses, children, options}) {
  const [display, setDisplay] = useState(false);

  const handleDropdownChange = () => {
    setDisplay(!display);
  };
  const hideMenu = () => {
    setDisplay(false);
  };
  const ref = useOutsideClick(hideMenu);

  return (
    <div className={extraClasses + " ml-3 relative"}>
      <div>
        <button type="button"
                onClick={handleDropdownChange}
                ref={ref}
                className="max-w-xs rounded-full flex items-center text-sm"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true">
          <span className="sr-only">Open user menu</span>
          {children}
        </button>
      </div>
      <div
        className={(display ? "" : "hidden ") + "origin-top-right right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 absolute w-96 md:w-48 z-10"}
        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
        {options.map((item, index) => dropdownItem(item, index))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      func: PropTypes.func,
      path: PropTypes.string,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]).isRequired,
    }),
  ).isRequired,
};

Dropdown.defaultProps = {
  extraClasses: "",
};

export default Dropdown;

