import React from "react";
import {PropTypes} from "prop-types";

import Tag from "./Tag";

const DATA = "data:image/webp;base64,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";

function UR({className}) {
  return (
    <Tag data={DATA} className={className}/>
  );
}

UR.propTypes = {
  className: PropTypes.string,
};

UR.defaultProps = {
  className: "",
};

export default UR
