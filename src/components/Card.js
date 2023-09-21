import React from "react";
import {PropTypes} from "prop-types";

function Card({children, className, ...props}) {
  return (
    <div
      {...props}
      className={"m-4 p-3 rounded-md border border-gray-100 shadow-lg " + className}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;
