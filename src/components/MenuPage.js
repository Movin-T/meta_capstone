import React from 'react';

const MenuPage = () => {
  const menuCategories = [
    {
      category: 'Lunch & Starters',
      items: [
        {
          name: 'Greek Salad',
          price: '$12.99',
          description: 'Fresh veggies, olives, and feta.',
        },
        {
          name: 'Bruchetta',
          price: '$5.99',
          description: 'Grilled bread with garlic and seasoning.',
        },
        {
          name: 'Grilled Calamari',
          price: '$14.00',
          description: 'Tender calamari with lemon and herbs.',
        },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        {
          name: 'Grilled Salmon',
          price: '$22.00',
          description: 'Freshly caught salmon with lemon butter.',
        },
        {
          name: 'Pasta Primavera',
          price: '$18.00',
          description: 'Seasonal vegetables with light garlic oil.',
        },
        {
          name: 'Lemon Roasted Chicken',
          price: '$19.50',
          description: 'Half chicken with herbs and potatoes.',
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Lemon Dessert',
          price: '$5.00',
          description: "Grandma's secret recipe.",
        },
        {
          name: 'Baklava',
          price: '$6.50',
          description: 'Sweet pastry with honey and nuts.',
        },
        {
          name: 'Fruit Platter',
          price: '$7.00',
          description: 'Fresh seasonal Mediterranean fruits.',
        },
      ],
    },
  ];

  return (
    <section className="menu-page" style={{ padding: '4rem 0' }}>
      <div className="container">
        <h1
          style={{
            textAlign: 'center',
            color: 'var(--primary-green)',
            marginBottom: '3rem',
          }}
        >
          Our Menu
        </h1>
        {menuCategories.map((cat) => (
          <div
            key={cat.category}
            className="menu-category"
            style={{ marginBottom: '4rem' }}
          >
            <h2
              style={{
                borderBottom: '2px solid var(--primary-yellow)',
                paddingBottom: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {cat.category}
            </h2>
            <div
              className="specials-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {cat.items.map((item) => (
                <article key={item.name} className="special-card">
                  <div
                    className="special-content"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      className="special-header"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: '1rem',
                      }}
                    >
                      <h3 style={{ margin: 0 }}>{item.name}</h3>
                      <span
                        className="price"
                        style={{
                          fontWeight: 700,
                          color: 'var(--secondary-peach)',
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      style={{ color: 'var(--primary-green)', lineHeight: 1.6 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;
