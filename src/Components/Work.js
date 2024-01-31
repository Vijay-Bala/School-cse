import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import webImage from '../Assets/web.jpg';
import uiuxImage from '../Assets/uiux.png';
import posterImage from '../Assets/poster.png';
import pythonImage from '../Assets/python.jpg';
import cyberImage from '../Assets/cyber.jpg';
import gameImage from '../Assets/game.jpg'

const courses = [
  {
    title: 'WEB DEVELOPMENT',
    image: webImage,
    description: `
      Learn the fundamentals of web development and build modern websites.
      Explore HTML, CSS, JavaScript, and popular web frameworks.
      Get hands-on experience with real-world projects.
      Start your journey to become a skilled web developer.
      `,
  },
  {
    title: 'UI/UX',
    image: uiuxImage,
    description: `
      Explore the principles of User Interface (UI) and User Experience (UX) design.
      Learn to create intuitive and user-friendly designs.
      Dive into prototyping, wireframing, and usability testing.
      Enhance your skills in visual and interactive design.
      `,
  },
  {
    title: 'POSTER DESIGN',
    image: posterImage,
    description: `
      Unlock your creativity with poster design and visual communication skills.
      Learn the art of composition and typography.
      Express your ideas through compelling and impactful posters.
      Turn your design passion into stunning visual stories.
      `,
  },
  {
    title: 'PYTHON PROGRAMMING',
    image: pythonImage,
    description: `
      Master the Python programming language for versatile application development.
      Explore data science, machine learning with Python.
      Dive into frameworks like Django and Flask for web applications.
      Build a strong foundation in Python programming.
      `,
  },
  {
    title: 'CYBER SECURITY',
    image: cyberImage,
    description: `
      Enhance your skills in cybersecurity and protect digital systems from threats.
      Learn ethical hacking and penetration testing best practices.
      Understand network security, cryptography, and risk management.
      Become a cybersecurity professional and safeguard the digital world.
      `,
  },
  {
    title: 'GAME DEVELOPMENT',
    image: gameImage,
    description: `
    Dive into the captivating realm of game development, where creativity knows no bounds. Master the art of crafting immersive gaming experiences, explore intricate game mechanics, and bring your ideas to life. Unleash your potential as you delve into captivating graphics, and dynamic gameplay. Whether you're creating engaging narratives or designing thrilling challenges, embrace the journey of game development and build a solid foundation for your creative endeavors
      `,
  },
];

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  overflow: hidden;
  opacity: ${(props) => (props.isInView ? '1' : '0')};
  transform: ${(props) => (props.isInView ? 'scale(1)' : 'scale(0.8)')};
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in-out;
  transition: scale 0.7s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`;

const CourseContainer = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  transform: translateX(-${(props) => props.activeCourseIndex * 100}%);
`;

const CourseItem = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  margin: 0 10px;
`;

const CourseCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  position: relative;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

const CourseImage = styled.img`
  width: 70vw;
  height: 70vh;
  object-fit: cover;
  cursor: pointer;
`;

const CourseDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const CourseTitle = styled.h3`
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const CourseText = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  color: white;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Work = () => {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
      setShowDescription(false);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleImageClick = () => {
    setShowDescription(!showDescription);
  };

  const handleNextClick = () => {
    setActiveCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    setShowDescription(false);
  };

  const handlePrevClick = () => {
    setActiveCourseIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    setShowDescription(false);
  };

  return (
    <Wrapper ref={ref} isInView={isInView} style={{ marginTop: "20vh" }}>
      <h2 style={{ textAlign: 'center', fontSize: '3.5rem', marginBottom: '2rem' }}>Featured Courses</h2>
      <CourseContainer activeCourseIndex={activeCourseIndex}>
        {courses.map((course, index) => (
          <CourseItem key={index}>
            <CourseCard>
              <CourseImage src={course.image} alt={course.title} onClick={handleImageClick} />
              {showDescription && (
                <CourseDescription>
                  <CourseTitle>{course.title}</CourseTitle>
                  <CourseText>{course.description}</CourseText>
                </CourseDescription>
              )}
            </CourseCard>
          </CourseItem>
        ))}
      </CourseContainer>
      <ButtonContainer>
        <Button onClick={handlePrevClick}>{'<'}</Button>
        <Button onClick={handleNextClick}>{'>'}</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Work;