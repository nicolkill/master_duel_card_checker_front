import React from "react";
import {PropTypes} from "prop-types";

function FullPageSection({className, children, ...props}) {
  return (
    <div {...props} className={"max-w-7xl mx-auto h-restscreen px-8 xl:px-0 pt-48" + className}>
      {children}
    </div>
  );
}

FullPageSection.propTypes = {
  className: PropTypes.string,
};

FullPageSection.defaultProps = {
  className: "",
};

export default FullPageSection;
