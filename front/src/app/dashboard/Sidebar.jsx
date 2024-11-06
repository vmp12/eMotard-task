import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Board.</h2>
      <nav>
      <ul>
  <li className='text'><a href='/dashboard' style={{  fontFamily: 'Arial, sans-serif', fontSize: '16px', textDecoration: 'none' }}>Dashboard</a></li>
  <li className='text'><a href='/transactions' style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', textDecoration: 'none' }}>Transactions</a></li>
  <li className='text'><a href='/schedule' style={{  fontFamily: 'Arial, sans-serif', fontSize: '16px', textDecoration: 'none' }}>Schedules</a></li>
  <li className='text'><a href='/users' style={{  fontFamily: 'Arial, sans-serif', fontSize: '16px', textDecoration: 'none' }}>Users</a></li>
  <li className='text'><a href='/settings' style={{  fontFamily: 'Arial, sans-serif', fontSize: '16px', textDecoration: 'none' }}>Settings</a></li>
</ul>

      </nav>
      <div className="sidebar-footer">
        <p><a >Help</a></p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default Sidebar;
