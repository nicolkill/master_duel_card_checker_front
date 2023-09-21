import React from "react"
import { reducer, initialState } from "./reducer"

export const ClockContext = React.createContext({
  state: initialState,
  dispatch: () => null,
})

export const ClockProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <ClockContext.Provider value={[ state, dispatch ]}>
      { children }
    </ClockContext.Provider>
  )
}
