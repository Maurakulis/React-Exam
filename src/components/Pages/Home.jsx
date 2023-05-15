import { useContext } from "react"
import PostsContext from "../../contexts/PostsContext"
import Post from "../UI/Post"

const Home = () => {
  const { posts } = useContext(PostsContext)

  return (
    <main>
      {
        posts.length ?
          <div className="allCards">
            {
              posts.map(post =>
                <Post post={post} key={post.id}></Post>)
            }
          </div> :
          <section>
            <p>Loading... 🐌</p>
          </section>
      }
    </main>
  )
}

export default Home