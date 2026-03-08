import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start text-center text-md-start">

          {/* Brand Section */}
          <Col md={4}>
            <h6 className="footer-title">HerbaSphere 🌿</h6>
            <p>
              Discover fruits, vegetables, herbs and medicinal plants
              from around the world.
            </p>
          </Col>

          {/* Quick Links - Horizontal */}
          <Col md={4} className="text-center">
            <h6 className="footer-heading">Quick Links</h6>

            <div className="footer-links-horizontal">

              <NavLink to="/" className="footer-link">
                Home
              </NavLink>

              <NavLink to="/categories" className="footer-link">
                Categories
              </NavLink>

              <NavLink to="/favorites" className="footer-link">
                Favorites
              </NavLink>

              <NavLink to="/about" className="footer-link">
                About
              </NavLink>

            </div>
          </Col>
          {/* Contact Section */}
          <Col md={4} className="text-md-end">
            <h6 className="footer-heading">Contact</h6>
            <p>Email: support@herbasphere.com</p>
            <p>India 🌏</p>
          </Col>

        </Row>

        <hr className="my-2" />

        <div className="text-center footer-bottom">
          © {new Date().getFullYear()} HerbaSphere. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;