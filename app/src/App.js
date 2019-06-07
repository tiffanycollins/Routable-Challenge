import React from 'react';
import './css/App.css';
import Header from './components/Header';
import PaymentForm from './components/Form';
import PaymentDataTable from './components/PaymentDataTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="content-page">
        <div className="content">
          <Header />
          <PaymentForm />
          <PaymentDataTable />
          <div className="client-comment">
            <p>“Thank you for your business and have a great day.” - Google</p>
          </div>

          <div className="client-contact">
            <p>If you have any questions, contact Google at <a href="mailto:ar@google.com">ar@google.com</a>.</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
