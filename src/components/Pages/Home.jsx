import { useContext } from "react"
import PostsContext from "../../contexts/PostsContext"
import Post from "../UI/Post"

const Home = () => {
  const { posts } = useContext(PostsContext)

  return (
    <main>
      {
        Array.isArray(posts) && posts.length > 0 &&
        <div className="allCards">
          {
            posts.map(post =>
              <Post post={post} key={post.id}></Post>)
          }
        </div>
      }
      {
        typeof posts === 'undefined' &&
        <section>
          <p>Loading...</p>
        </section>
      }
      {
        Array.isArray(posts) && posts.length === 0 &&
        <section>
          <p>Empty...</p>
        </section>
      }
    </main >
  )
}

export default Home