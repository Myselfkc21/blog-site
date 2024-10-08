import React from 'react'

const Post = () => {
  return (
    <div className="Post">
        <div className="image">
          <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
        </div>
        <div className="texts">
          <h2>WordPress.org</h2>
          <p className='info'>
            <a className='autor'>Sam beckham</a>
            <time datetime="2022-01-01">2024-30-24</time>
          </p>
          <p className='summary'>More than 40% of all websites run on WordPress, from tiny local sites to major publications. It's the most popular blogging platform and CMS by far, and since it's open source, it's free for you to run on your own server (well, other than the hosting costs).
          </p>
        </div>
      </div>
  )
}

export default Post
