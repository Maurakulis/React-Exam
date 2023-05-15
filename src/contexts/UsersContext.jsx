/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext = createContext()

export const USERS_ACTION_TYPES = {
  GET: 'get_all_users',
  REGISTER: 'register',
  ADD: 'add_user',
}

const DATA = 'http://localhost:8080/users'

const reducer = (users, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.GET:
      return action.data
    case USERS_ACTION_TYPES.REGISTER:

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
    case USERS_ACTION_TYPES.ADD:
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
        type: USERS_ACTION_TYPES.GET,
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