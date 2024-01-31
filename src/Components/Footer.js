import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    bottom: 0,
    marginLeft: '-7.5vw',
    width: '100vw', // Set width to 100% of the viewport width
  };

  return (
    <footer style={footerStyle}>
      All rights reserved St. Joseph's College of Engineering | Design by Website Development Team
    </footer>
  );
}

export default Footer;
