
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',paddingTop:'20px',paddingBottom:'20px', margin:'10px' }}>
            <Card.Img 
                variant="top" 
                src={product.images[1]} 
                style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid black'}} 
            />
            <Card.Body>
                <Card.Title>Name :{product.title}</Card.Title>
                <Card.Text> Description {product.description}</Card.Text>
                <Card.Text>Brand: {product.brand}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button className='custom-button m-3'>Add to Cart</Button>    
                <Link to={`/productDetail/${product.id}`}  className="btn custom-button">Product Detail</Link>
          
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
