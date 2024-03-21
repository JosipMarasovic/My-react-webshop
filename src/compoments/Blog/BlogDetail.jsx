import React from 'react';
import { Container,Card } from 'react-bootstrap';
import blog from './blog.png'; 

function BlogDetail({selectedPost}) {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id ante feugiat vehicula at et magna. Ut ut nisi auctor, suscipit ipsum nec, vestibulum est. Phasellus viverra ante quis tempor vehicula. Nam posuere consectetur ultrices. Sed et lectus et metus vestibulum finibus. Nam sit amet nisi vel nulla lacinia ultricies. Sed et lacinia nunc. Vestibulum rhoncus malesuada ex, at cursus quam ultrices at. Donec sit amet magna in dui gravida accumsan. orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id ante feugiat vehicula at et magna. Ut ut nisi auctor, suscipit ipsum nec, vestibulum est. Phasellus viverra ante quis tempor vehicula. Nam posuere consectetur ultrices. Sed et lectus et metus vestibulum finibus. Nam sit amet nisi vel nulla lacinia ultricies. Sed et lacinia nunc. Vestibulum rhoncus malesuada ex, at orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id ante feugiat vehicula at et magna. Ut ut nisi auctor, suscipit ipsum nec, vestibulum est. Phasellus viverra ante quis tempor vehicula. Nam posuere consectetur ultrices. Sed et lectus et metus vestibulum finibus. Nam sit amet nisi vel nulla lacinia ultricies. Sed et lacinia nunc. Vestibulum rhoncus malesuada ex, atorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id ante feugiat vehicula at et magna. Ut ut nisi auctor, suscipit ipsum nec, vestibulum est. Phasellus viverra ante quis tempor vehicula. Nam posuere consectetur ultrices. Sed et lectus et metus vestibulum finibus. Nam sit amet nisi vel nulla lacinia ultricies. Sed et lacinia nunc. Vestibulum rhoncus malesuada ex, at  ";


    const defaultTitle = "Blog Title"
    
    return (
        <Container className="blog-container mb-5">
            <Card className="text-center">
                <Card.Img variant="top" src={blog} />
                <Card.Body>
                    <Card.Title>{selectedPost.title}</Card.Title>
                    <Card.Text>
                        {selectedPost.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BlogDetail;
