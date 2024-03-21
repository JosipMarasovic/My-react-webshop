


import React from 'react';
import { Card, Button } from 'react-bootstrap';

import blog from './blog.png'; 
function SingleCardDisplay({title, content,onClick }) {
    return (
        <Card>
            <Card.Img variant="top" src={blog} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                    <Button  onClick={onClick} className="custom-button">Details...</Button>
            </Card.Body>
        </Card>
    );
}

export default SingleCardDisplay;
 