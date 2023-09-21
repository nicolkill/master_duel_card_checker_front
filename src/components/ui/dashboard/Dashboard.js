import React from "react";
import {PropTypes} from "prop-types";

import Footer from "../Footer";
import NavBar from "../NavBar";
import HeaderTitle from "./HeaderTitle";

function Dashboard({menu, showTop, topText, children}) {
  return (
    <div className="min-h-full">
      <div>
        <NavBar options={menu}/>
        {showTop &&
        <HeaderTitle>
          {topText}
        </HeaderTitle>
        }
      </div>
      <main className="min-h-restscreen">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-2 sm:px-0">
            <div className="">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

Dashboard.propTypes = {
  menu: PropTypes.array,
  showTop: PropTypes.bool,
  topText: PropTypes.string.isRequired,
};

Dashboard.defaultProps = {
  menu: [],
  showTop: true,
};

export default Dashboard;
