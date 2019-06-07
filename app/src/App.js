import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="content-page">
        <div className="content">

          <div className="container-fluid">
            <div>
              <img src="" />
            </div>
            <div>
              <p>May 24, 2019</p>
              <h1>Invoice 1052</h1>
              <h3>Billed to: <i>James Lee, Coca Cola Inc.</i></h3>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
