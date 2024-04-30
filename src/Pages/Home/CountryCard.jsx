
import {  useLoaderData } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import { GiSpotedFlower } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const CountryCard = () => {
    const {loading} =useContext(AuthContext)
    const countryLoad=useLoaderData()
    const{countryName,short_des,cost,location,season,spotName}=countryLoad
    console.log(countryLoad)
    return (
        <div className="max-w-xl mx-auto mt-10">

            {
                loading?<span className="loading loading-ring loading-lg text-center"></span>:
                <div className="card w-96  text-black bg-white ">
                <div className="card-body">
                  <h2 className="card-title text-cyan-500">{countryName}</h2>
                  <p>{short_des}</p>
                  <div className="flex">
                      <p> <CiLocationOn />{location} </p>
                      <p><GiSpotedFlower />{spotName}</p>
                  </div>
                  <div className="flex">
                      <p>{cost} </p>
                      <p>{season}</p>
                  </div>
                  <div className="card-actions ">
                  <button className="btn">View Details</button> 
                  </div>
                </div>
              </div>
            }
          
        </div>
    );
};

export default CountryCard;