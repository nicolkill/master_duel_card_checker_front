import React from "react";
import {PropTypes} from "prop-types";

function Content({className, children, ...props}) {
  return (
    <p {...props} className={"text-xl mt-10" + className}>
      {children}
    </p>
  );
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: "",
};

export default Content;
