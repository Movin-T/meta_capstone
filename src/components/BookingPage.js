import { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: 'Birthday',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle booking submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
              <option value="22:00">10:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Make Your reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingPage;
