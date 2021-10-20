import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Membership = () => {
    const [members,setMembers]=useState([]);
    useEffect(()=>{
        fetch("./fakedata.json")
        .then(res=>res.json())
        .then(data => setMembers(data))
    },[])
    return (
        <div>
            <h1>Membership Plan</h1>
            <div className="member">
            {
                members.map(member=><Member member={member}></Member>)
            } 
            </div>
            
          
                
        </div>
    );
};

export default Membership;