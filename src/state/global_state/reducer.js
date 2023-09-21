const generateUID = (length = 5) => {
  return window.btoa(String.fromCharCode(...window.crypto.getRandomValues(new Uint8Array(length * 2)))).replace(/[+/]/g, "").substring(0, length);
}

export const reducer = (state, action) => {
  state.firstLoad = true;
  switch (action.type) {
    case "add_notification":
      const value = {
        ...action.newValue,
        id: generateUID(),
      };
      return {
        ...state,
        notifications: state.notifications.concat(value),
      };
    case "remove_notification":
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.newValue.id),
      };
    case "update_profile":
      return {
        ...state,
        profile: action.newValue,
        session: action.newValue !== null,
      }

    default:
      return state
  }
}

export const initialState = {
  firstLoad: false,
  session: null,
  profile: null,
  notifications: [],
}
