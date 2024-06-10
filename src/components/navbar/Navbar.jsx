import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';


const Menu = () => (


  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whatgpt3'>What is GPT3?</a> </p>
    <p><a href='#possibility'>Open AI</a> </p>
    <p><a href='#features'>Case Studies</a> </p>
    <p><a href='#blog'>Library</a></p>
  </>
)
const Navbar =

  () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (<div>
      <div className='gpt3-navbar'>
        <div className='gpt3-navbar-links'>
          <div className='gpt3-navbar-links-logo'>
            <img src='gpt4.jpeg' width='50px' />
          </div>
          <h2 className='name'>GPT3</h2>
          <div className='gpt3-navbar-links-container'>
            <Menu />
          </div>
          <div className='signs'>
            <button type='button' className='button-one'><p>Sign in</p></button>
            <button type='button' className='button-two'><p>Sign up</p></button>
          </div>
        </div>
        <div className='gpt3-navbar-menu'>
          {toggleMenu ?
            <RiCloseLine size={27} onClick={() => (setToggleMenu(false))} /> :
            <RiMenu3Line size={27} onClick={() => (setToggleMenu(true))} />}
          {toggleMenu && (
            <div className='gpt3-navbar-menu-container scale-up-center'>
              <div className='gpt3-navbar-menu-container-links'>
                <Menu />

                <div className='gpt3-navbar-menu-containers-links-sign'>
                  <button type='button' ><p>Sign in</p></button>
                  <button type='button'><p>Sign up</p></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>



    )
  }
export default Navbar;