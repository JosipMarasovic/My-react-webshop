import { Container, Row, Col } from "react-bootstrap";
import CardForCategories from "./CardForCategories";
import './categories.css';

function Categories(props) {
    
    const categories = props.categories.map(category => {
       
        return category.charAt(0).toUpperCase() + category.slice(1);
    });

    return (
        <Container className={"mb-5 container-padding"}> 
            <Row className="justify-content-center">
                <Col xs={12} className="text-center mt-5">
                    <h2><em>Categories</em></h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5 mb-5">
                {categories.map((title, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-5">
                        <CardForCategories title={title} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Categories;
