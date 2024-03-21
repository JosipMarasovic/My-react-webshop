import React from 'react';
import Card from 'react-bootstrap/Card';
import holder from './holder.png';
import { Link } from 'react-router-dom';

function CardForCategories(props) {
  const { title } = props;

  return (
    <Card>
      <Card.Img variant="top" src={holder} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/items/${title.toLowerCase()}`} className="btn custom-button">All items</Link>
          <Link to="/popular" className="btn custom-button">Popular</Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardForCategories;
