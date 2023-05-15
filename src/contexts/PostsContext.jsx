/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer } from "react";

const PostsContext = createContext()

export const POSTS_ACTION_TYPES = {
  GET: 'get_all_posts',
  ADD: 'add_new_post',
}

const DATA = 'http://localhost:8080/posts'

const reducer = (posts, action) => {
  switch (action.type) {
    case POSTS_ACTION_TYPES.GET:
      return action.data
    case POSTS_ACTION_TYPES.ADD:

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
  const [posts, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    (async () => {
      const res = await fetch(DATA)

      const data = await res.json()

      dispatch({
        type: POSTS_ACTION_TYPES.GET,
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