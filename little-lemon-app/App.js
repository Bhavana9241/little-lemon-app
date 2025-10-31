import React from 'react';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Little Lemon Restaurant Booking</h1>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
