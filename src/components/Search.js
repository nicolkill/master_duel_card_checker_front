import React, {useState} from "react";
import {PropTypes} from "prop-types";

import InputText from "./form/InputText";
import Button from "./Button";

function Search({submitText, loading, placeholder, defaultValue, submitCallback, changeCallback, showSubmit}) {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (name, value) => {
    setValue(value);
    if (changeCallback) {
      changeCallback(value);
    }
  };

  const handleSubmitForm = () => {
    submitCallback(value);
  };

  return (
    <div className="flex">
      <div className="flex-grow">
        <InputText
          name="input"
          placeholder={placeholder}
          value={value}
          extraClasses={(showSubmit ? "rounded-l-md" : "rounded-md")}
          changeCallback={handleInputChange} />
      </div>
      {showSubmit && <Button extraClasses="shadow rounded-none rounded-r-md py-0" callback={handleSubmitForm}>
        {loading &&
        <span className="material-icons animate-spin">autorenew</span>
        }
        <span className="flex-grow pl-2">
          {submitText}
        </span>
      </Button>}
    </div>
  );
}

Search.propTypes = {
  loading: PropTypes.bool,
  submitText: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  changeCallback: PropTypes.func,
  submitCallback: PropTypes.func.isRequired,
  showSubmit: PropTypes.bool,
};

Search.defaultProps = {
  loading: false,
  submitText: "Search...",
  placeholder: "Search",
  defaultValue: "",
  showSubmit: true,
};

export default Search;
