import React from "react";
import {PropTypes} from "prop-types";

function calculateDynamicSizes(image, elementsCount) {
  let imageAdjustments = "";
  let contentAdjustments = "pl-2 ";

  if (image) {
    contentAdjustments = "pl-28 ";
  }

  switch (elementsCount) {
    case 1:
      if (image) {
        imageAdjustments += "-left-3 ";
      }
      imageAdjustments += "w-28 h-28";
      break;
    case 2:
      if (image) {
        imageAdjustments += "-left-6 ";
      }
      imageAdjustments += "w-32 h-32";
      break;
    case 3:
      if (image) {
        imageAdjustments += "-left-9 ";
      }
      imageAdjustments += "w-36 h-36";
      break;
    case 4:
      if (image) {
        imageAdjustments += "-left-20 ";
      }
      imageAdjustments += "w-44 h-44";
      break;
    default:
      break;
  }

  return {
    imageAdjustments,
    contentAdjustments,
  };
}

function Contact({image, title, subtitles}) {
  let {
    imageAdjustments,
    contentAdjustments,
  } = calculateDynamicSizes(image, subtitles.length);

  return (
    <div
      className="overflow-hidden relative bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
      {image && <img
        alt=""
        src={image}
        className={`absolute rounded-full shadow-lg ${imageAdjustments}`}/>}
      <div className={`flex flex-col py-5 ${contentAdjustments}`}>
        <strong className="text-slate-900 text-sm font-medium dark:text-slate-200 truncate">
          {title}
        </strong>
        {subtitles.map((element, i) =>
          <span key={i}>
            {element}
          </span>
        )}
      </div>
    </div>
  );
}

Contact.propTypes = {
  image: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  subtitles: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
  ).isRequired,
};


export default Contact;
