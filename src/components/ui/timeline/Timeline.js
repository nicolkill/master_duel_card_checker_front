import React from "react";

import {PropTypes} from "prop-types";
import Element from "./Element";

function Timeline({ data }) {
  return (

    <div className="flex flex-col justify-center">
      <div className="py-3 sm:max-w-5xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          <div className="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"/>
          {data.map((e, i) => (
            <Element key={`timeline_element_${i}`} {...e} orientation={i % 2 === 0 ? "right" : "left"}/>
          ))}
        </div>
      </div>
    </div>

  );
}

Timeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      description: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
      ]),
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

Timeline.defaultProps = {
  data: [],
};

export default Timeline;
