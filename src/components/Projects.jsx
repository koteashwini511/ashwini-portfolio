import React from "react";
import ProjectLogo from '../images/projectLogo.jpg';
import RealEstateLogo from '../images/real-estateLogo.jpg';
import AmwayLogo from '../images/amwayLogo.jpg';
import RewardsLogo from '../images/rewardsLogo.jpg';
import "../styles.css"; // Import the CSS file to apply styles

const Projects = () => {
  return (
    <div className="container text-center">
      <div className="projects-grid">
        {/* Row 1: Card 1 and Card 2 */}
        <div className="card1">
          <h1>Experience!</h1>
          <p>Check out some of my work here!</p>
          <img
            src={ProjectLogo}
            alt="Project 2"
            className="project-img"
          />
        </div>
        <div className="card card2">
          <img
            src={RealEstateLogo}
            alt="Project 2"
          />
          <h4>Real Estate Web Application</h4>
          <p><h6>Mindstix Software Labs (Member of Technical Staff)</h6></p>
          <em>Aug 2022 - Dec 2023</em>
          <p>Collaborated with cross-functional teams to enhance features for Lennar Nova, a US-based real estate client. Contributed to the comprehensive web platform detailing homesite information for diverse division, including construction specific address, and community details. Implemented various functionalities including search, input date formatter, and cell editors, while also integrating projected cell interactions to enhance user experience and application interactivity</p>
        </div>

        {/* Row 2: Card 3 and Card 4 */}
        <div className="card card3">
          <img
            src={AmwayLogo}
            alt="Project 3"
          />
          <h5>E-Commerce Web Application</h5>
          <p><h6>Mindstix Software Labs (Member of Technical Staff)</h6></p>
          <em>Jan 2024 - Aug 2024</em>
          <p>Amway Italy is an e-commerce website that provides health, beauty, home and personal care products. Developed responsive components for product listing, product description pages and published components for checkout journey of the user.Led the implementation of address selection (billing, shipping, document upload) and legal entities feature, optimizing user experience and ensuring compliance with regional regulations.</p>
        </div>
        <div className="card card4">
          <img
            src={RewardsLogo}
            alt="Project 4"
          />
          <h5>Rewards and Recognition</h5>
          <p><h6>Coditas (Associate Software Engineer)</h6></p>
          <em>Jan 2022 - Jun 2022</em>
          <p>Contributed to the development of the user interface for an internal project titled "Rewards and Recognition". Implemented reward lists tailored for individual employees, focusing on enhancing user experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
