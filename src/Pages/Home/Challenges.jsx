import { useContext, useEffect, useState } from "react";
import Challenge from "./Challenge";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Challenges = () => {
    const {loading}=useContext(AuthContext)
    const [challengeLoaders,setChallengeLoaders]=useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/challenge')
        .then(res => res.json())
        .then(data => setChallengeLoaders(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto mt-10">
             <h1 className="text-center text-2xl font-bold ">Country are available</h1>
             {
                loading?<span className="loading loading-ring loading-lg text-center"></span>:<div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
               

                {
                   challengeLoaders.map(challengeLoad => <Challenge key={challengeLoad._id} challengeLoad={challengeLoad}></Challenge>)
                }
               </div>
             }
            
        </div>
    );
};

export default Challenges;

