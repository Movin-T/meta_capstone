const AvailableTimes = ({ availableTimes, selectedDate }) => {
  return (
    <section className="available-times-section">
      <h3>Available Reservation Times</h3>
      {selectedDate && (
        <p className="selected-date-info">
          Showing times for:{' '}
          {new Date(selectedDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      )}
      {availableTimes && availableTimes.length > 0 ? (
        <div className="times-grid">
          {availableTimes.map((time) => (
            <div key={time} className="time-slot">
              <span className="time-value">{time}</span>
              <span className="availability-badge">Available</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-times-message">
          {selectedDate
            ? 'No available times for this date. Please select another date.'
            : 'Select a date to view available times.'}
        </p>
      )}
    </section>
  );
};

export default AvailableTimes;
