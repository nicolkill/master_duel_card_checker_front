import React, { useState } from 'react';
import {PropTypes} from "prop-types";
import { Link, NavLink } from "react-router-dom";

const THEMES = {
  dark: {
    background: "bg-primary-100",
    buttonBackground: "bg-primary-100",
    hoverBackground: "bg-primary-200",
    text: "text-gray-100",
    hoverText: "text-white",
  },
  light: {
    background: "bg-white",
    buttonBackground: "bg-white",
    hoverBackground: "underline",
    text: "text-gray-800",
    hoverText: "text-gray-800",
  },
};

function themeBasics(theme, hover) {
  let classes = `${THEMES[theme].buttonBackground} ${THEMES[theme].text}`;

  if (hover) {
    classes = `${classes} hover:${THEMES[theme].hoverBackground} hover:${THEMES[theme].hoverText} transition`;
  }
  return classes;
}

function displayElement(ownClasses, theme, item, index) {
  if (item.element) {
    return (
      <div key={index}>
        {item.element}
      </div>
    );
  }
  const classValues = {
    key: index,
    className: `${ownClasses} ${themeBasics(theme, item.func || item.path)}`,
  };
  if (item.func) {
    const click = (event) => {
      event.preventDefault();
      item.func();
    }
    return (
      <button
        onClick={click}
        {...classValues}>
        {item.text}
      </button>
    );
  }
  if (item.path) {
    return (
      <NavLink
        to={item.path}
        {...classValues}
        className={({isActive}) => isActive ? classValues.className + ` ${THEMES[theme].hoverBackground} ${THEMES[theme].hoverText}` : classValues.className}>
        {item.text}
      </NavLink>
    );
  }
  if (item.url) {
    return (
      <a
        {...classValues}
        href={item.url}
        target="_blank"
        rel="noreferrer noopener">
        {item.text}
      </a>
    );
  }
  return (
    <span {...classValues}>
      {item.text}
    </span>
  );
}

function displayElementDesktop(item, index, theme) {
  return displayElement("px-3 py-2 rounded-md text-sm font-medium", theme, item, index);
}

function displayElementMobile(item, index, theme) {
  return displayElement("block px-3 py-2 rounded-md text-base font-medium", theme, item, index);
}

function left(item) {
  return (!item.align || item.align === "left");
}

function right(item) {
  return item.align === "right";
}

function shouldAppearFor(item) {
  // both on true or not set
  if ((item.desktop === undefined && item.mobile === undefined) || (item.desktop && item.mobile)) {
    return ["desktop", "mobile"];
  }

  if (item.desktop && !item.mobile) {
    return ["desktop"];
  }

  if (item.mobile && !item.desktop) {
    return ["mobile"];
  }
}

function desktopLeft(item) {
  return left(item) && shouldAppearFor(item).indexOf("desktop") >= 0;
}

function desktopRight(item) {
  return right(item) && shouldAppearFor(item).indexOf("desktop") >= 0;
}

function mobileLeft(item) {
  return left(item) && shouldAppearFor(item).indexOf("mobile") >= 0;
}

function mobileRight(item) {
  return right(item) && shouldAppearFor(item).indexOf("mobile") >= 0;
}

function NavBar({options, theme}) {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const handleResponsiveButton = () => {
    setResponsiveMenu(!responsiveMenu);
  };

  return (
    <nav className={`${THEMES[theme].background} ${THEMES[theme].text} border-b fixed w-full z-10`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <div className="">
                  {/*<img className="h-8 w-8" src="/images/logo_small.png"*/}
                  {/*     alt="Logo"/>*/}
                  <p className="text-md font-bold">
                    MasterDuel Card Checker
                  </p>
                </div>
              </Link>
            </div>
            {/* left options */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {
                  options
                    .filter(desktopLeft)
                    .map((item, index) => displayElementDesktop(item, index, theme))
                }
                {/*<a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>*/}
              </div>
            </div>
          </div>
          {/* right options */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {
                options
                  .filter(desktopRight)
                  .map((item, index) => displayElementDesktop(item, index, theme))
              }
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button"
                    onClick={handleResponsiveButton}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </div>

      <div className={(responsiveMenu ? "" : "hidden ") + "md:hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {
            options
              .filter(mobileLeft)
              .map((item, index) => displayElementMobile(item, index, theme))
          }
        </div>
        {
          options.filter(mobileRight).length > 0 &&
          <div className="px-2 pt-4 pb-3 border-t border-gray-700">
            {
              options
                .filter(mobileRight)
                .map((item, index) => displayElementMobile(item, index, theme))
            }
          </div>
        }
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      mobile: PropTypes.bool,
      desktop: PropTypes.bool,
      url: PropTypes.string,
      func: PropTypes.func,
      path: PropTypes.string,
      text: PropTypes.string,
      element: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
      ]),
      align: PropTypes.oneOf(["left", "right"]),
    })
  ).isRequired,
};

NavBar.defaultProps = {
  theme: "dark",
};

export default NavBar;

