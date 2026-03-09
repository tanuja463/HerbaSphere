import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

function Header() {

  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const [favCount, setFavCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  /* CHECK LOGIN STATUS */
  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", checkLogin);
    checkLogin();

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  /* LOAD FAVORITES COUNT */
  useEffect(() => {

    const updateFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavCount(favorites.length);
    };

    updateFavorites();

    window.addEventListener("storage", updateFavorites);

    return () => window.removeEventListener("storage", updateFavorites);

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("storage"));
    setExpanded(false);
    navigate("/");
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="custom-navbar">

      <Container>

        <Navbar.Brand
          as={NavLink}
          to="/"
          className="brand-logo"
          onClick={() => setExpanded(false)}
        >
          HerbaSphere 🌿
        </Navbar.Brand>

        {/* Hamburger icon */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <GiFruitBowl size={24} color="#22c55e" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link
              as={NavLink}
              to="/"
              end
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/categories"
              onClick={() => setExpanded(false)}
            >
              Categories
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/recipes"
              onClick={() => setExpanded(false)}
            >
              Recipes
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>

            {/* ❤️ Favorites with Counter */}
            <Nav.Link
              as={NavLink}
              to="/favorites"
              className="fav-icon ms-lg-2 position-relative"
              onClick={() => setExpanded(false)}
            >

              <FaHeart size={20} />

              {favCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-10px",
                    fontSize: "10px"
                  }}
                >
                  {favCount}
                </Badge>
              )}

            </Nav.Link>

            {!isLoggedIn && (
              <>
                <Button
                  as={NavLink}
                  to="/signup"
                  className="signup-btn ms-lg-3 mt-2 mt-lg-0"
                  onClick={() => setExpanded(false)}
                >
                  Signup
                </Button>

                <Button
                  as={NavLink}
                  to="/login"
                  className="login-btn ms-lg-2 mt-2 mt-lg-0"
                  onClick={() => setExpanded(false)}
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