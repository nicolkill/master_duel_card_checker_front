import React from "react";
import {PropTypes} from "prop-types";

import Footer from "../Footer";
import NavBar from "../NavBar";

function Landing({menu, children}) {
  return (
    <div className="relative bg-white overflow-hidden">
      <NavBar options={menu} theme="dark"/>
      <div className="">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

Landing.propTypes = {
  menu: PropTypes.array,
};

export default Landing;
