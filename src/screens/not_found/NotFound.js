import React from "react";
import {useLocation} from "react-router-dom";

import firebase from "../../services/firebase";

import TextTerminal from "../../components/TextTerminal";
import Landing from "../../components/ui/landing/Landing";
import Title from "../../components/ui/landing/section/Title";
import FullPageSection from "../../components/ui/landing/FullPageSection";

const MENU = [
  {
    text: "Products Checker",
    path: "/products",
  },
  {
    text: "Search changes Checker",
    path: "/search",
  },
];

function NotFound() {
  const location = useLocation();

  firebase.addEvent("not_found", location);

  return (
    <Landing menu={MENU}>
      <FullPageSection>
        <Title>
          <TextTerminal
            extraClasses="font-bold text-primary-100"
            options={["404", "Not found", "NOT_FOUND", ":not_found", "Not supposed to be here"]}/>
          <br/>
          <br/>
          <span className="">
            Page not found
          </span>
        </Title>
      </FullPageSection>
    </Landing>
  );
}

export default NotFound;
