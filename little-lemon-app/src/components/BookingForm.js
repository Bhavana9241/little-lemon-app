import React, { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!name || !email || !date || !time || !guests) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // ✅ Print data in console
    console.log("Booking Details:", {
      name,
      email,
      date,
      time,
      guests,
    });

    // ✅ Alert success message
    alert(`✅ Booking confirmed for ${name} on ${date} at ${time}`);

    // ✅ Reset form fields
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests("");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="name">Full Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="date">Booking Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Booking Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        placeholder="e.g. 2"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <button type="submit" className="submit-btn">
        Book Table
      </button>
    </form>
  );
}

export default BookingForm;
