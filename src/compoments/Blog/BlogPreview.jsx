import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCardDisplay from './SingleCardDisplay';
import './blog.css';


function BlogPreview() {
    const blogPosts = [
        {
            id: 1,
            title: 'Blog Post 1',
            content: 'Content for Blog Post 1...'
        },
        {
            id: 2,
            title: 'Blog Post 2',
            content: 'Content for Blog Post 2...'
        },
        {
            id: 3,
            title: 'Blog Post 3',
            content: 'Content for Blog Post 3...'
        }
    ];

    return (
        <Container className="blog-container mb-5">
            <h3 className="text-center mt-5">Cool Shoes Blog</h3>
            <Row className="justify-content-center pt-5 pb-5 mb-5">
                {blogPosts.map(post => (
                    <Col key={post.id} className="mb-4">
                            <SingleCardDisplay
                                title={post.title}
                                content={post.content}
                            />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BlogPreview;

