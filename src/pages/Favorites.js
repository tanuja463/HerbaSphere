import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Favorites() {

    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

        setFavorites(storedFavorites);

    }, []);


    // REMOVE FROM FAVORITES
    const removeFavorite = (id) => {

        const updatedFavorites = favorites.filter((item) => item.id !== id);

        setFavorites(updatedFavorites);

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        window.dispatchEvent(new Event("storage")); // ADD THIS LINE

    };

    // READ MORE NAVIGATION
    const handleReadMore = (item) => {

        navigate(`/category/${item.category}/${item.id}`);

    };

    return (

        <div className="favorites-page">

            <Container>

                <h2 className="text-center mb-4">❤️ My Favorites</h2>

                {favorites.length === 0 ? (

                    <p className="text-center">No favorite items yet</p>

                ) : (

                    <Row>

                        {favorites.map((item) => (

                            <Col lg={3} md={4} sm={6} xs={12} key={item.id} className="mb-4">

                                <Card className="favorite-card">

                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        className="favorite-img"
                                    />

                                    <Card.Body>

                                        <Card.Title className="favorite-title">
                                            {item.name}
                                        </Card.Title>

                                        <Card.Text className="favorite-desc">
                                            {item.description?.slice(0, 80)}...
                                        </Card.Text>

                                        <div className="d-flex justify-content-between">

                                            <Button
                                                variant="success"
                                                size="sm"
                                                onClick={() => handleReadMore(item)}
                                            >
                                                Read More
                                            </Button>

                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => removeFavorite(item.id)}
                                            >
                                                <FaTrash />
                                            </Button>

                                        </div>

                                    </Card.Body>

                                </Card>

                            </Col>

                        ))}

                    </Row>

                )}

            </Container>

        </div>

    );

}

export default Favorites;