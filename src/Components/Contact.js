import React from "react";

const Contact = () => {
  const handleButtonClick = () => {
    const emailAddress = "hodcse@stjosephs.ac.in";
    const subject = "Query about the Internship";
    const body = "Hello, I have a question.";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Any Questions In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input className="mailtext" type="text" placeholder="Your mail_id" style={{marginRight:'2vh'}}/>
        <button className="secondary-button" onClick={handleButtonClick}>
          Mail
        </button>
      </div>
    </div>
  );
};

export default Contact;
