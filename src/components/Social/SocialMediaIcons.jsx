import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SocialMediaIcons = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          {/* Social Media Icons */}
          <div className="d-flex justify-content-between align-items-center">
            {/* Facebook Icon */}
            <img
              src="./src/social/facebook.png"
              alt="Facebook Icon"
              className="w-50 h-50 d-lg-inline d-none"
            />

            {/* Twitter Icon */}
            <img
              src="twitter-icon.png"
              alt="Twitter Icon"
              className="w-50 h-50 d-lg-inline d-none"
            />

            {/* Instagram Icon */}
            <img
              src="instagram-icon.png"
              alt="Instagram Icon"
              className="w-50 h-50 d-lg-inline d-none"
            />

            {/* Social Media Icons for Small Screens */}
            <div className="d-inline d-lg-none">
              {/* Facebook Icon */}
              <img
                src="facebook-icon.png"
                alt="Facebook Icon"
                className="w-30 h-30"
              />

              {/* Twitter Icon */}
              <img
                src="twitter-icon.png"
                alt="Twitter Icon"
                className="w-30 h-30"
              />

              {/* Instagram Icon */}
              <img
                src="instagram-icon.png"
                alt="Instagram Icon"
                className="w-30 h-30"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaIcons;
