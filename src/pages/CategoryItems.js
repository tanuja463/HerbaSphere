import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import dataMap from "../data/dataMap";

function CategoryItems() {

    const { categoryName } = useParams();
    const navigate = useNavigate();

    const items = dataMap[categoryName] || [];

    /* HEALTH CONDITION STATE */
    const [condition, setCondition] = useState("");

    if (items.length === 0) {
        return <h3 className="text-center mt-5">No data available</h3>;
    }

    /* FILTER ITEMS */
    const filteredItems = items.filter(
        (item) => condition === "" || item.condition?.includes(condition)
    );

    return (

        <Container className="mt-5">

            {/* CATEGORY TITLE */}
            <h2 className="mb-4 text-center text-capitalize">
                {categoryName.replace(/-/g, " ")}
            </h2>

            {/* HEALTH FILTER */}
            <div className="text-center mb-4">

                <h5>Filter by Health Benefit</h5>

                <select
                    className="form-select w-50 mx-auto"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                >

                    <option value="">All</option>

                    <option value="immunity">Immunity</option>
                    <option value="digestion">Digestion</option>
                    <option value="eyes">Eye Health</option>
                    <option value="skin">Skin Care</option>
                    <option value="heart">Heart Health</option>
                    <option value="energy">Energy</option>

                </select>

            </div>

            <Row className="g-4 justify-content-center">

                {filteredItems.map((item) => (

                    <Col lg={3} md={4} sm={6} key={item.id}>

                        <Card className="text-center shadow-sm h-100">

                            <Card.Img
                                variant="top"
                                src={item.image}
                                style={{
                                    height: "150px",
                                    objectFit: "cover"
                                }}
                            />

                            <Card.Body>

                                <Card.Title>{item.name}</Card.Title>

                                <Button
                                    variant="success"
                                    size="sm"
                                    onClick={() =>
                                        navigate(`/category/${categoryName}/${item.id}`)
                                    }
                                >
                                    View Details
                                </Button>

                            </Card.Body>

                        </Card>

                    </Col>

                ))}

            </Row>

            {/* BACK BUTTON AT BOTTOM */}
            <div className="text-center mt-5">
                <Button
                    variant="outline-secondary"
                    onClick={() => navigate("/categories")}
                >
                    ← Back to Categories
                </Button>
            </div>

        </Container>

    );
}

export default CategoryItems;