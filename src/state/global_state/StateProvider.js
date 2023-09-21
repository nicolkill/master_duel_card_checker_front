import React from "react"
import { reducer, initialState } from "./reducer"

export const StateContext = React.createContext({
  state: initialState,
  dispatch: () => null,
})

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={[ state, dispatch ]}>
      { children }
    </StateContext.Provider>
  )
}
