import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/@st.josephsgroupofinstituti7921/videos";

  return (
    <div className="about-section-container" style={{ marginTop: '1vh' }}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading" style={{background: 'linear-gradient(black, blue)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',}}>
          About Our Department
        </h1>
        <p className="primary-text">- Accredited by NBA Since 2002</p>
        <p className="primary-text">- Anna university recogonized Research centre</p>
        <p className="primary-text">- Strong Industrial collaboration and Alumni interaction for placements</p>
        <p className="primary-text">- Several clubs & student chapters for promoting Co-Curricular activities</p>
        <p className="primary-text">- Motivating students to participate in various national events</p>
        <p className="primary-text">- Several value-added courses are conducted beyond curriculum</p>
        <p className="primary-text">- Facilitating Industrial Visits and NGOs for the comprehensive development of the students </p>
        <div className="about-buttons-container">
          <a href="https://www.stjosephscse.com/#/"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a>
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;