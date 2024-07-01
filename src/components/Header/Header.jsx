import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img className='Molniy' src="../../../public/image/Molniy.png" alt="Sociala Logo" />
          <span>Sociala.</span>
        </div>
        <input type="text" placeholder="Start typing to search.." />
      </div>
      <div className="header-icons">
        <div className="icon active">
            <img className='header-icon' src="../../../public/image/Home.png" alt="Home" />
        </div>
        <div className="icon active">
            <img className='header-icon' src="../../../public/image/Lightning.png" alt="Lightning" />
        </div>
        <div className="icon active">
            <img className='header-icon' src="../../../public/image/Video.png" alt="Video" />
        </div>
        <div className="icon active">
        <img className='header-icon' src="../../../public/image/ProfilePicture.png" alt="Profile" />
        </div>
        <div className="icon active">
        <img className='header-icon' src="../../../public/image/Cart.png" alt="Cart" />
        </div>
      </div>
      <div className="header-right">
      <img className='header-right' src="../../../public/image/Bell.png" alt="Bell" />
      <img className='header-right' src="../../../public/image/Message.png" alt="Message" />
      <img className='header-right' src="../../../public/image/Thems.png" alt="Thems" />
      <img className='header-right' src="../../../public/image/ProFile.png" alt="ProFile" />
        <div className="profile"><i className="profile-picture" /></div>
      </div>
    </header>
  );
};
export default Header;