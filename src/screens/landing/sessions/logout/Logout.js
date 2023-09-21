import React from "react";

import uListApi from "../../../../services/uListApi";
import firebase from "../../../../services/firebase";

function Logout () {
  uListApi.logout();

  firebase.registerScreen("logout");

  window.location.href = "/";
  return (
    <div/>
  );
}

export default Logout;
