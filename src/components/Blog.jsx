import React from 'react'
import axios from 'axios'
import Post from './Post'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

   componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=30')
      .then(response => {
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {
    const { posts } = this.state
    return (
      <div className="container-fluid container-md">
        <div className="row mt-3 mt-md-4">
          <div className="col-1"></div>
          <div className="col-10">
            <h3 className="mb-3">Blog Posts</h3>
            <div style={{ maxHeight: '600px', overflowY: 'auto'}}>
              {
                posts.map(post => 
                  <Post key={post.id} post={post}/>
                )
              }
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    )
  }
}

export default Blog