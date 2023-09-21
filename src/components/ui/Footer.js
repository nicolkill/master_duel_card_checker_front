import React from "react";

function Footer() {
  return (
    <div className="h-footer bg-primary-100 text-white p-8 xl:px-0">
      <div className="flex max-w-7xl mx-auto">
        <div className="flex-1">
          <span className="font-bold">Navigation</span>
          <ul className="list-disc mt-2">
            <li>
              <a href="https://www.masterduelmeta.com/" target="_blank" rel="noreferrer noopener">MasterDuelMeta</a>
            </li>
          </ul>
        </div>
        {/*<div className="flex-1">*/}
        {/*  <span className="font-bold">Social</span>*/}
        {/*  <ul className="list-disc mt-2">*/}
        {/*    <li>*/}
        {/*      <a href="https://www.masterduelmeta.com/" target="_blank" rel="noreferrer noopener">MasterDuelMeta</a>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default Footer;
