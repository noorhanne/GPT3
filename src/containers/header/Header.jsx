import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='gpt3-header section-padding' id='home'>
      <div className='gpt3-header-content'>
        <h1 className='gradient-text'>
          Let's Build Something Amazing With GPT-3 OpenAI

        </h1>
        <p><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam a tempora quas quasi facilis nobis dignissimos voluptate earum consequatur sapiente, delectus vel hic reprehenderit velit debitis voluptatem quia voluptatum atque.</span><span>Similique eveniet facere earum voluptatem doloremque.</span></p>


        <div className='gpt3-header-content-input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button' >GET STARTED</button>
        </div>

        <div className='gpt3-header-content-people'>
          <img src='person6.png' width='35px' />
          <img src='person2.webp' width='35px' />
          <img src='person3.png' width='35px' />
          <img src='person7.png' width='35px' />
          <img src='person1.png' width='35px' />


          <p>1,600 people requested to access a visit in last 24hours</p>
        </div></div>
      <div className='gpt3-header-image'>
        <img src='header1.png' width='100%' height='250px' className='img' />
      </div>

    </div>
  )
}
export default Header;