import React from "react";

import Button from "../Button";

const HIDE_TIMEOUT = 20000;

function Notification({closeCallback, notification}) {
  const bindClose = closeCallback.bind(this, notification);

  if (!notification.permanent) {
    setTimeout(bindClose, HIDE_TIMEOUT);
    // add animation to hide in HIDE_TIMEOUT
  }

  return (
    <div className="shadow-xl border-2 bg-primary-100 text-white max-w-md rounded-md p-2 pr-10">
      <button
        onClick={bindClose}
        className="material-icons absolute right-0 pr-2 hover:text-gray-400">
        close
      </button>
      <span className="text-xl">
        {notification.title}
      </span>
      <p className="text-md">
        {notification.message}
      </p>
      {notification.link &&
      <p className="mt-2">
        <Button
          type="secondary"
          size="small"
          link={notification.link}>
          Go to page
        </Button>
      </p>
      }
    </div>
  );
}

export default Notification;
