
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product }) {
    return (
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',paddingTop:'20px',paddingBottom:'20px', margin:'10px' }}>
            <Card.Img 
                variant="top" 
                src={product.thumbnail} 
                style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid black'}} 
            />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Brand: {product.brand}</Card.Text>
                <Card.Text>Category: {product.category}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Discount: {product.discountPercentage}%</Card.Text>
                <Card.Text>Rating: {product.rating}</Card.Text>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Button className='custom-button'>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
