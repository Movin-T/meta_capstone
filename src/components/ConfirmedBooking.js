import React, { useEffect, useState } from 'react';

const ConfirmedBooking = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem('booking');
    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    }
  }, []);

  return (
    <section className="container confirmed-booking">
      <div className="confirmation-header">
        <h1>Booking Confirmed!</h1>
      </div>
      <p>Your reservation has been successfully confirmed.</p>
      {booking && (
        <div className="booking-details">
          <h2>Reservation Details</h2>
          <ul>
            <li>
              <strong>Date:</strong> {booking.date}
            </li>
            <li>
              <strong>Time:</strong> {booking.time}
            </li>
            <li>
              <strong>Guests:</strong> {booking.guests}
            </li>
            <li>
              <strong>Occasion:</strong> {booking.occasion}
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default ConfirmedBooking;
