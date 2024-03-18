


import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blog from './blog.png'; 

function SingleCardDisplay({ title, content }) {
    return (
        <Card>
            <Card.Img variant="top" src={blog} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Link to="/blog">
                    <Button className="custom-button">Details...</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default SingleCardDisplay;
