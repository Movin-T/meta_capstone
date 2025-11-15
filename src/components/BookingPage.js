import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <section className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <p className="booking-intro">
          Book your table at Little Lemon for an unforgettable Mediterranean
          dining experience. Choose your preferred date and time, and we'll have
          everything ready for you.
        </p>
        <BookingForm />
      </div>
    </section>
  );
};

export default BookingPage;
