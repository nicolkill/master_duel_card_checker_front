import React, {useContext} from "react";
import {Outlet} from "react-router-dom";

import firebase from "../../services/firebase";
import Search from "../../components/Search";
import LandingComponent from "../../components/ui/landing/Landing";
import {StateContext} from "../../state/global_state/StateProvider";
// import Dropdown from "../../components/Dropdown";

// const DROPDOWN = [
//   {
//     text: "Dasboard",
//     path: "/dashboard/products",
//   },
//   {
//     text: "Profile",
//     path: "/dashboard/profile",
//   },
//   {
//     text: "Sign out",
//     path: "/sign_out",
//   },
// ];
const MENU = [
  // {
  //   text: "Products Checker",
  //   path: "/products",
  // },
  {
    text: "MasterDuelMeta",
    url: "https://www.masterduelmeta.com/",
  },
];
// const AUTH_MENU = [
//   {
//     align: "right",
//     desktop: true,
//     element: (
//       <Dropdown options={DROPDOWN}>
//         <span className="material-icons text-lg">person</span>
//       </Dropdown>
//     ),
//   },
//   {
//     mobile: true,
//     align: "right",
//     text: "Dasboard",
//     path: "/dashboard/products",
//   },
//   {
//     mobile: true,
//     align: "right",
//     text: "Profile",
//     path: "/dashboard/profile",
//   },
//   {
//     mobile: true,
//     align: "right",
//     text: "Sign out",
//     path: "/sign_out",
//   },
// ];
// const UNAUTH_MENU = [
//   {
//     align: "right",
//     text: "Login",
//     path: "/login",
//   },
//   {
//     align: "right",
//     text: "/",
//     desktop: true,
//   },
//   {
//     align: "right",
//     text: "Register",
//     path: "/register",
//   },
// ];

function Landing() {
  firebase.registerScreen("landing");

  const [, dispatch] = useContext(StateContext);

  const handleChange = (value) => {
    dispatch({ type: "search_change", newValue: value });
  };

  const search = {
    element: <Search changeCallback={handleChange} submitCallback={() => {}} showSubmit={false} />
  };
  const menu = MENU.concat([search]);

  return (
    <LandingComponent menu={menu}>
      <Outlet/>
    </LandingComponent>
  );
}
export default Landing;
