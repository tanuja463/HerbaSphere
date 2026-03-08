import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import picImage from "../assets/pic.jpg";

function About() {
  return (
    <div>



      {/* About Section */}
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={picImage}
              alt="Healthy Fruits and Vegetables"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="text-success mb-3">About HerbaSphere</h2>
            <p>
              Our vision is to inspire healthier lifestyles, promote environmental
              awareness, and encourage a deeper appreciation for the natural world
              through accessible and well-structured information.
            </p>
            <p>
              Our vision is to inspire healthier lifestyles, promote environmental
              awareness, and encourage a deeper appreciation for the natural world
              through accessible and well-structured information.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <Container className="mt-5">
        <Row className="text-center">
          <Col md={6}>
            <Card className="shadow border-0 p-3">
              <Card.Body>
                <Card.Title className="text-success">🌱 Our Mission</Card.Title>
                <Card.Text>
                  To make plant knowledge accessible and engaging for everyone
                  through a clean, categorized digital experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow border-0 p-3">
              <Card.Body>
                <Card.Title className="text-success">🌍 Our Vision</Card.Title>
                <Card.Text>
                  To inspire healthier living and environmental awareness
                  through structured plant-based information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="mt-5 mb-5">
        <h2 className="text-center text-success mb-4">
          Why Choose HerbaSphere?
        </h2>

        <Row>
          <Col md={4}>
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
              />
              <Card.Body>
                <Card.Title>Organized Categories</Card.Title>
                <Card.Text>
                  Explore fruits, vegetables, herbs and medicinal plants in
                  clearly structured sections.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
              />
              <Card.Body>
                <Card.Title>Modern UI</Card.Title>
                <Card.Text>
                  Clean, responsive design built with Bootstrap and React for
                  smooth navigation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6"
              />
              <Card.Body>
                <Card.Title>Educational Purpose</Card.Title>
                <Card.Text>
                  Built to demonstrate component architecture, routing, and
                  authentication in React.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default About;