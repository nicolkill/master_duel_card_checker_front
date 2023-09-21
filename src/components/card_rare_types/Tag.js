import React from "react";
import {PropTypes} from "prop-types";

function Tag({data, className}) {
  return (
    <div className={`flex ${className}`}>
      <div className="grow"/>
      <img className="w-2/5" src={data} alt=""/>
    </div>
  );
}

Tag.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  className: "",
};

export default Tag;
