const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      image: '/images/customer1.jpg',
      review:
        'Amazing food and great atmosphere! The Greek salad was fresh and delicious. Highly recommend!',
    },
    {
      id: 2,
      name: 'Mike Thompson',
      rating: 5,
      image: '/images/customer2.jpg',
      review:
        'Best Mediterranean restaurant in Chicago! The lemon dessert is to die for.',
    },
    {
      id: 3,
      name: 'Emily Davis',
      rating: 4,
      image: '/images/customer3.jpg',
      review:
        'Fantastic experience! The staff was friendly and the food was authentic.',
    },
    {
      id: 4,
      name: 'David Martinez',
      rating: 5,
      image: '/images/customer4.jpg',
      review:
        'Love this place! Family-friendly and the portions are generous. Will be back soon!',
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What our customers say!</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="rating">{renderStars(testimonial.rating)}</div>
              <div className="customer-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <h4>{testimonial.name}</h4>
              </div>
              <p>{testimonial.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
