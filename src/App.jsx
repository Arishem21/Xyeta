import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import HelperPanel from './components/HelperPanel/helperPanel.jsx';
import UserPosts from './components/UserPosts/userPosts.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='MainCont'>
        <HelperPanel />
        <UserPosts />
      </div>
    </div>
  );
}

export default App;
