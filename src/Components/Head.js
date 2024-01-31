import React, { useEffect, useState } from 'react';
import clg from '../Assets/clg.png';
import clg2 from '../Assets/clgbg.png';

const Head = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: '20vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: '3vw'
      }}
    >
      <img
        src={isMobileView ? clg2 : clg}
        alt="CLG Logo"
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Head;
