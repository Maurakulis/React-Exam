/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer } from "react";
import { PostActionType } from "./constants";

const PostsContext = createContext()

const DATA = 'http://localhost:8080/posts'

const reducer = (posts, action) => {
  switch (action.type) {
    case PostActionType.GET:
      return action.data
    case PostActionType.ADD:

      const newPost = {
        title: action.title,
        description: action.description,
        imageUrl: action.imageUrl,
      }

      fetch(DATA, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })
      return [...posts, newPost]
    default:
      return posts
  }
}

const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(reducer, undefined)

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA)

      const data = await res.json()

      dispatch({
        type: PostActionType.GET,
        data: data
      })
    })()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  )
}

export { PostsProvider }
export default PostsContext