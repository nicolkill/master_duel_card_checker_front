import React from 'react';
import {
  useLocation,
} from "react-router-dom";
import firebase from "../../services/firebase";

function Redirect() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  firebase.addEvent("redirect", location)

  window.location.href = query.get("redirect_url");
  return (
    <div/>
  );
}

export default Redirect;
