import { useState } from 'react';
import BookingForm from './BookingForm';
import AvailableTimes from './AvailableTimes';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  // Track selected date to show available times
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <section className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <p className="booking-intro">
          Book your table at Little Lemon for an unforgettable Mediterranean
          dining experience. Choose your preferred date and time, and we'll have
          everything ready for you.
        </p>

        <div className="booking-content">
          <div className="booking-form-section">
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
              onDateChange={setSelectedDate}
            />
          </div>

          <div className="available-times-wrapper">
            <AvailableTimes
              availableTimes={availableTimes}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
