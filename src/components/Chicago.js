const Chicago = () => {
  return (
    <section className="about">
      <div className="container about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
          <p>
            Founded by brothers Adrian and Mario, Little Lemon has become a
            beloved fixture in the Chicago dining scene. We take pride in
            bringing the authentic flavors of Mediterranean cuisine to our
            community, using recipes passed down through generations.
          </p>
        </div>
        <div className="about-images">
          <img
            src="/images/mario-adrian-a.jpg"
            alt="Mario and Adrian - Restaurant Owners"
            className="about-image-1"
          />
          <img
            src="/images/mario-adrian-b.jpg"
            alt="Mario and Adrian cooking"
            className="about-image-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Chicago;
