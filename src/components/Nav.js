import React from 'react';
//import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <h1>Sweet Shop</h1>
      <ul>
        {/* <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li> */}
        <li>Cart:{props.basketNumbers}</li>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/shop'>Shop</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
