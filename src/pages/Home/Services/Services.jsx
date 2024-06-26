import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => { 
    const [services, setServices] =  useState([])

    useEffect(()=>{
        fetch('services.json')
           .then(res => res.json())
           .then(data => setServices(data))
    },[])
    return (
        <div className="mt-8 container mx-auto mb-10
         font-serif">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-orange-700">Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or random words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-6">   
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;