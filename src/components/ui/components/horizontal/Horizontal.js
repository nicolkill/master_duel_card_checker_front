import React from "react";

function Horizontal({children, ...props}) {
  return (
    <div {...props} className="md:flex mt-3">
      {children}
    </div>
  );
}

export default Horizontal;
