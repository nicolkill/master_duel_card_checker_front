import React from 'react';
import {PropTypes} from "prop-types";

function CenterContainer({className, children, ...props}) {
  return (
    <div
      {...props}
      className={"flex items-center justify-center " + className}>
      {children}
    </div>
  );
}

CenterContainer.propTypes = {
  className: PropTypes.string,
};

CenterContainer.defaultProps = {
  className: "",
};

export default CenterContainer;
