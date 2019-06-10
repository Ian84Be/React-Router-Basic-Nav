import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="nav">
        <h1>React Router Mini</h1>
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>
  );
};

export default Navigation;
