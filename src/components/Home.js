import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to HerbaSphere 🌿</h1>
        <p className="hero-subtitle">
          Discover the world of Health.
        </p>

        <Link to="/categories">
          <Button variant="success" size="lg">
            Explore Categories
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;