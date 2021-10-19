import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import "./ServiceDetails.css"

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const[details,setdetails]=useState([]);
    const[singleService,setSingleService]=useState({});
    useEffect(()=>{
        fetch("/services.json")
        .then(res=>res.json())
        .then(data =>setdetails(data))
    },[])
    useEffect(() => {
      const foundDetails= details.find(servicedetails =>servicedetails.id==serviceId)
      console.log(foundDetails)
      setSingleService(foundDetails)
      
    }, [details])
    return (
        <>
        <div className="container p-5 mt-5">
            <div className="mt-5 row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <h1>{singleService?.title}</h1>
                <img className="img-fluid" src={singleService?.img} alt="" />
                </div>
                <div className="mt-5 text-start">
                    {singleService?.description}
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ServiceDetails;