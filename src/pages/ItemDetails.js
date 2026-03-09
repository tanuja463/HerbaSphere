import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FaHeart, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import dataMap from "../data/dataMap";

function ItemDetails() {

    const { categoryName, id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const items = dataMap[categoryName] ? dataMap[categoryName] : [];

    const item = items.find((item) => String(item.id) === String(id));

    const [isFavorite, setIsFavorite] = useState(false);

    /* Check if item already in favorites */
    useEffect(() => {

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const exists = favorites.find((fav) => fav.id === item?.id);

        if (exists) {
            setIsFavorite(true);
        }

    }, [item]);

    /* Add to favorites */
    const addToFavorites = () => {

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const alreadyExists = favorites.find((fav) => fav.id === item.id);

        if (!alreadyExists) {

            const itemWithCategory = {
                ...item,
                category: categoryName
            };
            favorites.push(itemWithCategory);

            localStorage.setItem("favorites", JSON.stringify(favorites));

            window.dispatchEvent(new Event("storage"));  // ADD THIS LINE

            setIsFavorite(true);

        }

    };

    if (!item) {
        return (
            <Container className="mt-5">
                <h3 className="text-center">Item not found</h3>
            </Container>
        );
    }

    return (
        <div className="item-details-page">

            <Container className="item-container">

                {/* 🔙 BACK BUTTON */}
                <Button
                    variant="outline-secondary"
                    className="mb-3"
                    onClick={() => navigate(location.state?.from || -1)}
                >
                    <FaArrowLeft /> Back
                </Button>

                <Card className="item-card shadow">

                    <Row className="g-3 align-items-center">

                        {/* IMAGE */}
                        <Col lg={5} md={5} sm={12} className="image-container">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="item-image"
                            />
                        </Col>

                        {/* CONTENT */}
                        <Col lg={7} md={7} sm={12}>
                            <Card.Body>

                                <h2 className="item-title">{item.name}</h2>

                                <h5>Description</h5>
                                <p>{item.description}</p>

                                <h5>Medicinal Uses</h5>
                                <p>{item.medicinalUses}</p>

                                <h5>Home Remedies</h5>
                                <p>{item.homeRemedies}</p>

                                <h5>Benefits</h5>

                                <ul className="benefits-list">
                                    {item.benefits &&
                                        item.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                </ul>

                                {/* ❤️ FAVORITE BUTTON */}

                                <Button
                                    className="mt-3"
                                    variant={isFavorite ? "secondary" : "danger"}
                                    onClick={addToFavorites}
                                    disabled={isFavorite}
                                >

                                    <FaHeart /> {isFavorite ? "Added to Favorites" : "Add to Favorites"}

                                </Button>

                            </Card.Body>
                        </Col>

                    </Row>

                </Card>

            </Container>

        </div>
    );
}

export default ItemDetails;