const Post = ({ post }) => {

  return (
    <div className="card">
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.title}</p>
    </div>
  )
}

export default Post