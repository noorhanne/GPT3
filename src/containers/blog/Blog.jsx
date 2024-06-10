import React from 'react'
import './blog.css'
const Blog = () => {
  return (
    <div className='gpt3-blog' id='blog'>
      <div className='gpt3-blog-header'>
        <h1>A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className='gpt3-blog-container'>
        <div className='group-one'>
          <img src='../../assets/blog01.png' alt='blog1' width='100%' />
          <p>
            <h6>Sep 26, 2021</h6>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <h6>Read Full Article</h6>
          </p>
        </div>
        <div className='group-two'>
          <div className='group-two-one'>
            <img src='../../assets/blog02.png' alt='blog2'/><p>


              <h6>Sep 26, 2021</h6>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <h6>Read Full Article</h6>
            </p>
          </div>
          <div className='group-two-two'>
            <img src='../../assets/blog03.png' alt='blog3' /><p>
              <h6>Sep 26, 2021</h6>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <h6>Read Full Article</h6> </p>
          </div>
        </div>
        <div className='group-three'>
          <div className='group-three-one'>
            <img src='../../assets/blog04.png' alt='blog4' /><p>
              <h6>Sep 26, 2021</h6>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <h6>Read Full Article</h6> 
              </p>
          </div>
          <div className='group-three-two'>
            <img src='../../assets/blog05.png' alt='blog5' />
            <p><h6>Sep 26, 2021</h6>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <h6>Read Full Article</h6>
               </p>
          </div>
        </div>
      </div></div>
  )
}

export default Blog