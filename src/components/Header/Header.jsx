import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="path/to/logo.png" alt="Sociala Logo" />
          <span>Sociala.</span>
        </div>
        <input type="text" placeholder="Start typing to search.." />
      </div>
      <div className="header-icons">
        <div className="icon active"><i className="home-icon" /></div>
        <div className="icon"><i className="lightning-icon" /></div>
        <div className="icon"><i className="video-icon" /></div>
        <div className="icon"><i className="profile-icon" /></div>
        <div className="icon"><i className="cart-icon" /></div>
      </div>
      <div className="header-right">
        <div className="notification"><i className="bell-icon" /></div>
        <div className="message"><i className="message-icon" /></div>
        <div className="profile"><i className="profile-picture" /></div>
      </div>
    </header>
  );
};
export default Header;