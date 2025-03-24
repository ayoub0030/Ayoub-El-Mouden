import React from "react";
import { Container } from "react-bootstrap";

function Education() {
  return (
    <Container fluid className="home-about-section" id="education">
      <Container>
        <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
          <span style={{ color: "white" }}>My</span> <span className="purple">Education</span>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          My academic journey 
        </p>
        
        <div className="education-timeline">
          {/* First Education Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <span className="purple">09/2024 - Now</span>
            </div>
            <div className="timeline-content">
              <h3>ENSAM</h3>
              <p className="degree">Master Degree</p>
              <p className="field">Field: Big Data and IoT</p>
            </div>
          </div>

          {/* Second Education Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <span className="purple">09/2023 - 06/2024</span>
            </div>
            <div className="timeline-content">
              <h3> Ben M’Sik University </h3>
              <p className="degree">Bachelor Degree</p>
              <p className="field">Field: Software Engineering & Data Bases</p>
            </div>
          </div>

          {/* Third Education Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <span className="purple">10/2021 - 06/2023</span>
            </div>
            <div className="timeline-content">
              <h3>Ben M’Sik University</h3>
              <p className="degree">Deug Degree</p>
              <p className="field">Field: Mathematics and Computer Science</p>
            </div>
          </div>

          {/* Fourth Education Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <span className="purple">2020 - 2021</span>
            </div>
            <div className="timeline-content">
              <h3>LYCÉE MOSTAFA AL MAANI</h3>
              <p className="degree">Baccalaureat</p>
              <p className="field">Mathematical Science</p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Education;
