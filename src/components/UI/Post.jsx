const Post = ({ post }) => {

  return (
    <div className="card">
      <img src={post.imageUrl} alt={post.title} />
      <div>
        <h5>{post.title}</h5>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default Post