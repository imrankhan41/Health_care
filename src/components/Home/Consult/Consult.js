import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import "./Consult.css"
const Consult = (props) => {
    const {title,img,description}=props.consult
    return (
        <div className="m-2 card">
            <Card>
            <Card.Title>{title}</Card.Title>
                <Card.Img style={{height:'20rem'}} variant="top" src={img} />
                <Card.Body>
                
                <Card.Text>
                   {description}
                </Card.Text>
                </Card.Body>
            </Card>
                
        </div>
    );
};

export default Consult;