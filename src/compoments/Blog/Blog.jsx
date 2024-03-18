import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogPreview from './BlogPreview';
import BlogDetail from './BlogDetail';

function Blog() {
    return (
        <Container>
            <Row>
                <h2 className='text-center'>Cool Shoes Blog</h2>
               
                <Col sm={3} className="my-5">
                    <BlogPreview />
                </Col>
              
                <Col sm={9} className="my-5">
                    <BlogDetail />
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;
