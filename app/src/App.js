import React from 'react';
import './css/App.css';
import Header from './components/Header';
import PaymentForm from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="content-page">
        <div className="content">
          <Header />
          <PaymentForm />

        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
