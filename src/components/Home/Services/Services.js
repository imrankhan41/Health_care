import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("./services.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div id="services"  className="m-auto mt-5 row">
            <h1 className="fontsize text-primary">Our Services</h1>
            <div className="cards">
                {
                    services.map(service=><Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;