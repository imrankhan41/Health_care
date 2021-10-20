import React from 'react';
import { Card } from 'react-bootstrap';
import { FcCheckmark } from "react-icons/fc";
import "./Member.css"
const Member = (props) => {
    const {name,price,time,weight,cardino,yoga,training,protein}=props.member;
    return (
        <div >
              <Card>
                <Card.Body>
                <Card.Title className="text-white bg-danger">{name}</Card.Title>
                <Card.Text className="text-start">
                ${price}
                </Card.Text>
                <Card.Text className="text-start">
                {time}
                </Card.Text>
                <Card.Text className="text-start">
                <FcCheckmark/>{weight}
                </Card.Text>
                <Card.Text className="text-start">
                <FcCheckmark/>{cardino}
                </Card.Text>
                <Card.Text className="text-start">
                <FcCheckmark/>{yoga}
                </Card.Text>
                <Card.Text className="text-start">
                <FcCheckmark/>{training}
                </Card.Text>
                <Card.Text className="text-start">
                <FcCheckmark/>{protein}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Member;