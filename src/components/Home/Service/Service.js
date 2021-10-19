import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {title,img,text,id}=props.service;
    return (
        <div className="m-2 card">
            <Card>
            <Card.Title className="fs-3">{title}</Card.Title>
                <Card.Img style={{height:'20rem'}} variant="top" src={img} />
                <Card.Body>
                
                <Card.Text>
                  {text} <Link  to={`/service/${id}`}>Read More...</Link>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;