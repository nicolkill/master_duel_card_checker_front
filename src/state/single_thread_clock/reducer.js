const UNITS = {
  MICRO: "microsecond",
  SECOND: "second",
}

export const reducer = (state, action) => {
  state.firstLoad = true;
  switch (action.type) {
    case "update":
      const count = (state.count === 9 ? 0 : state.count + 1);
      const event = (count === 0 ? UNITS.SECOND : UNITS.MICRO);

      return {
        count,
        event,
      };

    default:
      return state
  }
}

export const initialState = {
  firstLoad: false,
  count: 0,
  event: UNITS.MICRO,
}
