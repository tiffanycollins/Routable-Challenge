import React from 'react';
import logo from '../images/google-icon.png';

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div>
          <img width="75px" src={logo} />
        </div>
        <div>
          <p>May 24, 2019</p>
          <h1>Invoice 1052</h1>
          <h3>Billed to: <i>James Lee, Coca Cola Inc.</i></h3>
        </div>
      </div>
    </div>
  );
}
