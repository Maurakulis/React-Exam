/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer, useState } from "react";
import { UserActionType } from "./constants";

const UsersContext = createContext()

const DATA = 'http://localhost:8080/users'

const reducer = (users, action) => {
  switch (action.type) {
    case UserActionType.GET:
      return action.data
    case UserActionType.REGISTER:

      const newUser = {
        email: action.email,
        password: action.password,
        passwordConfirm: action.passwordConfirm,
      }

      fetch(DATA, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      return [...users, newUser]
    case UserActionType.ADD:
      return [...users, action.data]
    default:
      return users
  }
}

const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, [])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA)

      const data = await res.json()
      dispatch({
        type: UserActionType.GET,
        data: data
      })
    })()
  }, [])

  return (
    <UsersContext.Provider value={{ users, dispatch, currentUser, setCurrentUser }}>
      {children}
    </UsersContext.Provider>
  )
}

export { UsersProvider }
export default UsersContext