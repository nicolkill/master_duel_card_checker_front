import React from "react";
import {PropTypes} from "prop-types";

import Button from "../Button";

function Form({submit, loading, submitCallback, children}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    submitCallback();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        {children}
      </div>
      {submit &&
      <div>
        <Button extraClasses="shadow w-full" buttonType="submit">
          <span className="material-icons opacity-20">lock</span>
          <span className="flex-grow pl-2">
          Sign in
          </span>
          {loading &&
          <span className="material-icons animate-spin">autorenew</span>
          }
        </Button>
      </div>
      }
    </form>
  );
}

Form.propTypes = {
  loading: PropTypes.bool,
  submit: PropTypes.bool,
  submitCallback: PropTypes.func.isRequired,
};

Form.defaultProps = {
  loading: false,
  submit: true,
};

export default Form;
