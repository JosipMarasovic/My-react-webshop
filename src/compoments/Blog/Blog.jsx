import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogPreview from './BlogPreview';
import BlogDetail from './BlogDetail';

function Blog() {
    const initialBlogPosts = [
        {
            id: 1,
            title: ' Wtf Blog Post 1',
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


    const [blogPosts,setBLogPosts] = useState(initialBlogPosts)
    const [selectedPost,setSelectedPost] = useState(initialBlogPosts[0])

    function ChangeBlogPosts(post){

        setSelectedPost(post) 
    }
    return (
        <Container className='mt-5'>
            <Row>
                <h2 className='text-center'>Cool Shoes Blog</h2>
                <Col sm={3} className="my-5">
                    <BlogPreview blogPosts={blogPosts} ChangeBlogPosts={ChangeBlogPosts}/>
                </Col>
                <Col sm={9} className="my-5">
                    <BlogDetail selectedPost={selectedPost}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;
