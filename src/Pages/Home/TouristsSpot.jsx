import { useContext, useState } from "react";
import { useEffect } from "react";
import Spot from "./Spot";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const TouristsSpot = () => {
    const {loading}=useContext(AuthContext)
    const [spots,setSpots] =useState([])

    useEffect(() => {
        fetch('https://server-site-country-project.vercel.app/addSpots')
        .then(res=> res.json())
        .then(data =>{
            
                setSpots(data)
            
        })
    },[spots])
    return (
        <div className="max-w-6xl mx-auto ml-8">
            {
                loading? <span className="loading  text-center  ml-96 loading-ring loading-lg"></span>:
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                  spots.map(spot=><Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
            }
            
           
            
            
        </div>
    );
};

export default TouristsSpot;