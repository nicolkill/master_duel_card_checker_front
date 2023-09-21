import React from "react";
import {PropTypes} from "prop-types";

import Button from "./Button";

const SIZES = {
  small: "sm:max-w-lg",
  normal: "sm:max-w-4xl",
  big: "sm:max-w-7xl",
};

function Modal({size, display, closeCallback, options, children}) {
  const handleCloseModal = () => {
    closeCallback();
  };
  return (
    <div className={(display ? "opacity-100" : "opacity-0 hidden") + " transition relative z-10"} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div className={"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 " + SIZES[size] + " sm:w-full"}>
            <button onClick={handleCloseModal} className="material-icons absolute right-0 p-2 text-gray-300 hover:text-gray-400">close</button>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {children}
            </div>
            {options.length > 0 &&
            <div className="bg-gray-100 px-4 py-3 sm:px-6 flex">
              <div className="flex-grow"/>
              {options.map((o, index) =>
                <div key={index}>
                  <Button
                    callback={o.callback}
                    type={(o.type ? o.type : "primary")}
                    extraClasses="mr-1">
                    {o.text}
                  </Button>
                </div>
              )}
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  display: PropTypes.bool,
  closeCallback: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      callback: PropTypes.func,
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["primary", "secondary", "accent", "error", "danger", "link"]),
    })
  ),
};

Modal.defaultProps = {
  display: false,
  size: "normal",
  options: []
};

export default Modal;
