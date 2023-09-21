import React from "react";
import {PropTypes} from "prop-types";

function Section({children, className, ...props}) {
  return (
    <div
      {...props}
      className={"sm:flex-1 " + className}>
      {children}
    </div>
  );
}

Section.propTypes = {
  className: PropTypes.string,
};

Section.defaultProps = {
  className: "",
};

export default Section;
