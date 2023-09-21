import React, {useContext, useEffect, useState} from "react";

import Notification from "./Notification";
import {StateContext} from "../../state/global_state/StateProvider";
import firebase from "../../services/firebase";

function NotificationDisplay() {
  const [state, dispatch] = useContext(StateContext);
  const [loaded, setLoaded] = useState(false)

  const handleNotificationEntered = (payload, permanent = false) => {
    const notification = {
      permanent,
      title: payload.notification.title,
      message: payload.notification.body,
      link: payload.data.link
    };

    dispatch({ type: "add_notification", newValue: notification });
  };

  const closeCallback = (notification) => {
    dispatch({ type: "remove_notification", newValue: notification });
  };

  const pushToken = async () => {
    setLoaded(true);
    const currentToken = await firebase.getPushToken();
    if (currentToken) {
      // const response = await uListApi.pushToken(currentToken);
      // if (response.status !== 204) {
      //   return;
      // }
      // todo: add notification reporter
      firebase.addOnMessageFunction(handleNotificationEntered);
      return;
    }

    handleNotificationEntered({
      data: {
        link: null,
      },
      notification: {
        title: "Warning with Notifications",
        body: "You not allowed permission to show notifications, the most instant way to know if a product its available its with allowing them",
      }
    }, true);
  };

  useEffect(() => {
    if (!loaded && state.profile) {
      pushToken();
    }
  });

  return (
    <div className="absolute bottom-0 pl-4 pb-4">
      {state.notifications.map((n, index) => (
        <Notification key={index} notification={n} closeCallback={closeCallback}/>
      ))}
    </div>
  );
}

export default NotificationDisplay;
