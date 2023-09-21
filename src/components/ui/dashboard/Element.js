import React from 'react';
import {PropTypes} from "prop-types";

function Element({calculateStatus, element, selectedCallback}) {
  return (
    <div
      onClick={selectedCallback}
      className={(calculateStatus() ? "" : "opacity-30 hover:opacity-100 transition ") + "mb-1 cursor-pointer rounded-md p-4 border-4 border-gray-400 grid grid-cols-4 gap-4"}>
      <div className="grid grid-cols-1 gap-1">
        {element.image !== "not_found" &&
        <img className=""
             src={element.image}
             alt={element.text}/>
        }
      </div>
      <div className="col-span-3">
        <p className="flex-grow truncate hover:text-left hover:text-clip pr-2">
          {element.text}
        </p>
      </div>
      <div className="flex text-xs mb-1">
        {element.tags.map((e, i) =>
          <span key={i} className={"px-4 rounded font-bold bg-secondary-100 text-white opacity-30 mr-1"}>
            {e}
          </span>
        )}
      </div>
    </div>
  );
}

Element.propTypes = {
  selectedCallback: PropTypes.func.isRequired,
  calculateStatus: PropTypes.func,
  element: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
  }),
};

Element.defaultProps = {
  calculateStatus: () => true,
};

export default Element;
