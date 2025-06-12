import React from 'react'

const Post = ({val, setPageno}) => {
  return (
    <div>
      {
        val.map((item) => {
          return (
            <div key={item.id} className="post">
              <img src={item.download_url} alt="post" />
              <p>Author: {item.author}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Post
