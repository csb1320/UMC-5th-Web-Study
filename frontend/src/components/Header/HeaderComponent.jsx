// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
      <Link to="/">Weather 페이지</Link>
      <span style={{ margin: '0 10px' }}>|</span>
      <Link to="/login">Login 페이지</Link>
    </div>
  );
};

export default Header;
