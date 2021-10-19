import React, { useEffect, useState } from 'react';
import Consult from '../Consult/Consult';
import "./Consultation.css"
const Consultation = () => {
    const [consults,setConsults]=useState([]);
    useEffect(()=>{
        fetch("./consult.json")
        .then(res=> res.json())
        .then(data =>setConsults(data))
    },[])
    return (
        <div id="consultancy" className="m-auto mt-5 row ">
            <h1 className="mb-5 text-primary">Best Consultaion</h1>
            <div className="cards">
                {
                    consults.map(consult=><Consult consult={consult}></Consult>)
                }
            </div>
           
        </div>
    );
};

export default Consultation;