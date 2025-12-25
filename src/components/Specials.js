import { Link } from 'react-router-dom';

const Specials = () => {
  const specialsData = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: '/images/greek-salad.jpg',
    },
    {
      id: 2,
      name: 'Bruchetta',
      price: '$5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: '/images/bruchetta.jpg',
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.00',
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: '/images/lemon-dessert.jpg',
    },
  ];

  return (
    <section className="specials">
      <div className="container">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <Link to="/menu" className="btn btn-primary" aria-label="On Click">
            Online Menu
          </Link>
        </div>
        <div className="specials-grid">
          {specialsData.map((special) => (
            <article key={special.id} className="special-card">
              <img src={special.image} alt={special.name} />
              <div className="special-content">
                <div className="special-header">
                  <h3>{special.name}</h3>
                  <span className="price">{special.price}</span>
                </div>
                <p>{special.description}</p>
                <Link
                  to="/order-online"
                  className="order-link"
                  aria-label="On Click"
                >
                  Order a delivery
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8L8 12M12 8L8 4M12 8H4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
