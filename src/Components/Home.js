import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const staticContent = [
    {
      heading: "Department Of<br/>Computer Science &<br/>Engineering Offers a summer internship by the best professionals. &<br/> From 15th April to 24th May",
      text: [
        "Courses Offered",
        "- Web Development",
        "- UI/UX",
        "- Poster Designing",
        "- Cyber Security",
        "- Game Development",
        "- Python Programming",
      ],
      link: "https://forms.gle/EYDz9tTzWM4AvGCa7",
      buttonText: "Register Now",
    },
  ];

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust root margin based on your design
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (lineIndex < staticContent[currentItemIndex].text.length - 1) {
        setLineIndex((prevIndex) => prevIndex + 1);
      } else {
        setLineIndex(0);
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % staticContent.length);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [lineIndex, currentItemIndex]);

  // Reset animation when not in view
  useEffect(() => {
    if (!inView) {
      setCurrentItemIndex(0);
      setLineIndex(0);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`home-container ${inView ? 'visible' : ''}`}
      style={{
        background: `url("../Assets/entrance.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: '2vh',
      }}
    >
      <div
        className={`home-text-section with-shadow ${inView ? 'animate' : ''}`}
        style={{
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out, scale 1s ease-in-out',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px) scale(0.9)',
          backgroundColor: 'transparent', // Transparent background
          padding: '20px', // Adjust padding as needed
          borderRadius: '10px', // Adjust border radius as needed
          color: 'white', // Text color
        }}
      >
        <h1 className="primary-heading" style={{ textAlign: 'center', whiteSpace: 'pre-line' }}>
          Department Of<br />
          Computer Science & Engineering <br /></h1>
        <h2 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize:'2rem', color:'#4c4c4c' }}>
          Offers a summer internship by the best professionals. <br />
        </h2>
        <h3 style={{ textAlign: 'center', whiteSpace: 'pre-line', fontSize:'2rem', color:'#4c4c4c' }}>
          From 15th April to 24th May <br /></h3>
        <div className="primary-text">
          {staticContent[currentItemIndex].text.slice(0, lineIndex + 1).map((line, index) => (
            <p key={index}>
              {line.split('').map((letter, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    transition: `transform 1s ease-in-out ${i * 0.1}s`,
                    transform: inView ? 'translateX(0)' : 'translateX(100%)',
                  }}
                >
                  {letter}
                </span>
              ))}
            </p>
          ))}
        </div>
        <button className="secondary-button">
          <a
            href={staticContent[currentItemIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {staticContent[currentItemIndex].buttonText} <FiArrowRight />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;