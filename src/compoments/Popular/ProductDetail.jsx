import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import holder from './holder.png';
import { useEffect } from 'react';

function ProductDetail({ smartphoneProducts }) {


    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    const { id } = useParams();
    const product = smartphoneProducts.find(product => product.id === parseInt(id));

    if (!product) {
        return <div>Loading...</div>; // Handle case when product is not found
    }


    return (
        <Card className="mt-5 mb-5 pt-5 pb-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '20px', paddingBottom: '20px', margin: '10px' }}>
            <Card.Img
                variant="top"
                src={holder}
                style={{ width: '500px', height: '400px', border: '2px solid black' }}
            />
            <Card.Body>
                <Card.Title><strong>Name</strong>: {product.title}</Card.Title>
                <Card.Text><strong>Description</strong>: {product.description}</Card.Text>
                <Card.Text><strong>Brand</strong>: {product.brand}</Card.Text>
                <Card.Text><strong>Category</strong>: {product.category}</Card.Text>
                <Card.Text><strong>Price</strong>: ${product.price}</Card.Text>
                <Card.Text><strong>Discount</strong>: {product.discountPercentage}%</Card.Text>
                <Card.Text><strong>Rating</strong>: {product.rating}</Card.Text>
                <Card.Text><strong>Stock</strong>: {product.stock}</Card.Text>
                <Button className='custom-button m-3 w-100 h-100  py-3 px-5'>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductDetail;
