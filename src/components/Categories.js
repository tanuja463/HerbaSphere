import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import medicinalImg from "../assets/medicinal-plants.jpg";
import leafyVegetables from "../assets/leafy-vegetables.jpeg";
import grainsCerals from "../assets/grains-cerals.jpg";
import nutsSeeds from "../assets/nuts-seeds.jpg";
import tropicalPlants from "../assets/tropical-plants.jpeg";
import edibleFlowers from "../assets/edible-flowers.jpeg";

function Categories() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [searchInput, setSearchInput] = useState(""); // Immediate typing
  const [search, setSearch] = useState(""); // Debounced search
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchInput);
    }, 300); // 300ms debounce
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Login status
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const categories = [
    { title: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf" },
    { title: "Vegetables", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999" },
    { title: "Leafy Vegetables", image: leafyVegetables },
    { title: "Culinary Herbs", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    { title: "Medicinal Plants", image: medicinalImg },
    { title: "Grains & Cereals", image: grainsCerals },
    { title: "Nuts & Seeds", image: nutsSeeds },
    { title: "Spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d" },
    { title: "Tropical Plants", image: tropicalPlants },
    { title: "Flowers", image: edibleFlowers }
  ];

  const visibleCategories = isLoggedIn ? categories : categories.slice(0, 4);

  // Filter and sort: matches first
  const filteredCategories = useMemo(() => {
    return visibleCategories
      .map((cat) => ({
        ...cat,
        matchIndex: cat.title.toLowerCase().indexOf(search.toLowerCase())
      }))
      .sort((a, b) => {
        if (a.matchIndex === -1 && b.matchIndex !== -1) return 1;
        if (a.matchIndex !== -1 && b.matchIndex === -1) return -1;
        if (a.matchIndex !== -1 && b.matchIndex !== -1)
          return a.matchIndex - b.matchIndex;
        return 0;
      });
  }, [visibleCategories, search]);

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const cards = document.querySelectorAll(".scroll-card");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Reset and observe new cards
    cards.forEach((card) => card.classList.remove("show"));
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredCategories]);

  return (
    <div className="category-page">
      {/* HERO */}
      <div className="category-hero">
        <Container className="text-center hero-content">
          <h1>Explore Nature’s Diversity 🌍</h1>
          <p>Discover plant-based categories designed for healthy living and natural healing.</p>
          {!isLoggedIn && (
            <Button
              variant="light"
              size="lg"
              className="hero-btn"
              onClick={() => navigate("/signup")}
            >
              Sign Up to Unlock All Categories
            </Button>
          )}
        </Container>
      </div>

      {/* CATEGORY SECTION */}
      <div className="category-section">
        <Container>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <h2>Browse Categories 🌱</h2>
            </Col>
            <Col md={6} className="text-md-end">
              <Form.Control
                type="text"
                placeholder="Search categories..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                style={{ maxWidth: "300px", display: "inline-block" }}
              />
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            {filteredCategories.map((cat, index) => (
              <Col key={index} xl={3} lg={3} md={6} sm={12} className="d-flex">
                <Card
                  className={`category-card scroll-card flex-fill ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card.Img variant="top" src={cat.image} className="category-img" />
                  <Card.Body className="d-flex flex-column text-center">
                    <Card.Title>{cat.title}</Card.Title>
                    <Button
                      variant="success"
                      className="explore-btn"
                      onClick={() =>
                        navigate(
                          `/category/${cat.title
                            .toLowerCase()
                            .replace(/&/g, "")
                            .replace(/\s+/g, "-")
                            .replace(/-+/g, "-")
                            .trim()}`
                        )
                      }
                    >
                      Explore
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {!isLoggedIn && (
            <div className="text-center mt-5">
              <h5>🔒 Sign up to explore more categories!</h5>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Categories;