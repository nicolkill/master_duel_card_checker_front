import React from "react";
import {PropTypes} from "prop-types";

function Title({className, children, ...props}) {
  return (
    <h1 {...props} className={"text-4xl md:text-6xl tracking-tight font-bold" + className}>
      <span className="block">
        {children}
      </span>
    </h1>
  );
}

Title.propTypes = {
  className: PropTypes.string,
};

Title.defaultProps = {
  className: "",
};

export default Title;
