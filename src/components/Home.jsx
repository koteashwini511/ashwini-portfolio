import React from "react";
import homePageLogo from "../images/home.png"
import "../styles.css"; // Ensure we have this CSS imported for custom styling

const Home = () => {
  return (
    <section id="home" className="container-fluid">
  <div className="row home-section">
    {/* Left + Middle Section Combined */}
    <div className="col-md-6 left-middle-section-wrapper">
      <div className="left-section-fun-shape">
        {/* Middle Section: Profile Image */}
        <div className="image-circle">
          <img src={homePageLogo} alt="Ashwini" className="profile-img" />
        </div>

        {/* Left Section: Name and Greeting on the right of the image */}
        <div className="left-section-right">
          <h2 className="hi-text">Hi, I am</h2>
          <h1 className="name-text">Ashwini</h1>
          <div className="saffron-line"></div>
        </div>
      </div>
    </div>

    {/* Right Section, Made Bigger */}
    <div className="col-md-6 right-section">
      <h2 className="software-engineer">Software Engineer</h2>
      <p className="description">
        As a Frontend Developer, I specialize in creating intuitive, visually appealing web experiences. With experience across various industries, I combine technical expertise and creative design to build innovative, user-centered products. My goal is to make every interaction seamless and memorable. Let's collaborate to bring your ideas to life!
      </p>
      {/* Container for buttons */}
      <div className="buttons-container">
        <button className="contact-btn"
         onClick={() => {
          window.location.href = "mailto:koteashwini511@gmail.com";
        }}
        >
          Contact Me
        </button>
        <button className="download-btn">
        <a
          href="/Kote_Ashwini(1).pdf"  // Path to the resume in the public folder
          download="Kote_Ashwini.pdf"  // Name to save the file as
          className="color"
        >
          Download Resume
        </a>
        </button>
      </div>


    </div>
  </div>
</section>


  );
};

export default Home;
