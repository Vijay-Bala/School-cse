import React from 'react';
import busImage from '../Assets/bus.jpg';
import foodImage from '../Assets/food.png';
import labImage from '../Assets/lab.jpg';

const Features = () => {
  const features = [
    { title: 'Comfortable Travel Facility', image: busImage, link: 'https://stjosephs.ac.in/facility/transport.html' },
    { title: 'Delicious & Hygienic Food', image: foodImage, link: 'https://stjosephs.ac.in/facility/menu/monday/index.html' },
    { title: 'High Tech Laboratories', image: labImage, link: 'https://stjosephs.ac.in/facility.html' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '7vh', // Increased margin top
    marginBottom: '2vh',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
  };

  const titleStyle = {
    padding: '10px',
    fontSize: '1rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '2vh', // Add margin below the heading
    textAlign: 'center', // Center the heading
  };

  const handleHover = (index) => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2)';
      } else {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)';
      }
    });
  };

  return (
    <div>
      <h2 style={headingStyle}>Facilities Provided</h2>
      <div style={containerStyle}>
        {features.map((feature, index) => (
          <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer">
            <div
              className="feature-card"
              style={cardStyle}
              onMouseOver={() => handleHover(index)}
              onMouseOut={() => handleHover(-1)}
            >
              <img src={feature.image} alt={feature.title} style={imageStyle} />
              <div style={titleStyle}>{feature.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Features;
