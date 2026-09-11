import { useEffect, useState } from "react"
import { client } from "./sanity/client"
import { postsQuery } from "./sanity/queries"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.fetch(postsQuery).then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <div>
      <h1>My Blog</h1>

      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <h1>{post.slug.current}</h1>
        </div>
      ))}
    </div>
  )
}

export default App
