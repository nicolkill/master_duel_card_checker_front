import React from "react";
import {PropTypes} from "prop-types";

const THEMES = {
  dark: "bg-primary-100 text-white",
  light: "bg-white text-black",
};

function Section({children, className, theme, ...props}) {
  return (
    <div {...props} className={"p-8 xl:px-0 " + THEMES[theme] + " " + className}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(THEMES)),
};

Section.defaultProps = {
  className: "",
  theme: "light",
};

export default Section;
