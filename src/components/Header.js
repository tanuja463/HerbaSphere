import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkLogin);
    checkLogin();

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-logo">
          HerbaSphere 🌿
        </Navbar.Brand>

        {/* Hamburger icon */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiFruitBowl size={24} color="#22c55e" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/categories">
              Categories
            </Nav.Link>

            <Nav.Link as={NavLink} to="/recipes">
              Recipes
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            {/* ❤️ Favorite Icon */}
            <Nav.Link
              as={NavLink}
              to="/favorites"
              className="fav-icon ms-lg-2"
            >
              <FaHeart size={20} />
            </Nav.Link>

            {!isLoggedIn && (
              <>
                <Button
                  as={NavLink}
                  to="/signup"
                  className="signup-btn ms-lg-3 mt-2 mt-lg-0"
                >
                  Signup
                </Button>

                <Button
                  as={NavLink}
                  to="/login"
                  className="login-btn ms-lg-2 mt-2 mt-lg-0"
                >
                  Login
                </Button>
              </>
            )}

            {isLoggedIn && (
              <Button
                onClick={handleLogout}
                className="logout-btn ms-lg-3 mt-2 mt-lg-0"
                variant="danger"
              >
                Logout
              </Button>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;