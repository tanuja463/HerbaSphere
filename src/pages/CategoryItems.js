import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
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

            {/* TOP BAR WITH BACK BUTTON */}
            <Row className="align-items-center mb-4">

                <Col xs="auto">
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => navigate("/categories")}
                    >
                        <FaArrowLeft className="me-2" />
                        Back
                    </Button>
                </Col>

                <Col>
                    <h2 className="text-center text-capitalize m-0">
                        {categoryName.replace(/-/g, " ")}
                    </h2>
                </Col>

            </Row>

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

            {/* ITEMS GRID */}
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

        </Container>

    );
}

export default CategoryItems;