import React, { useState } from 'react';
function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !date || !time || !guests) {
      alert('Please fill in all fields!');
      return;
    }
    console.log({ name, email, date, time, guests });
    alert('Booking submitted!');
    // Reset form
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
