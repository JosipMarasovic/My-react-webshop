import React from 'react';
import { Container,Card } from 'react-bootstrap';
import blog from './blog.png'; 

function BlogDetail({selectedPost}) {
   
    const title = selectedPost.title
    const content = selectedPost.content

    return (
        <Container className="blog-container mb-5">
            <Card className="text-center">
                <Card.Img variant="top" src={blog} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BlogDetail;
