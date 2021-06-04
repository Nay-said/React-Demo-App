import React from 'react'

const Post = ({ post }) => {
  return (
    <div className="px-1 py-2">
      <h4>{post.id} - {post.title}</h4>
      <p>{post.body}</p>
      <hr />
    </div>
  )
}

export default Post
