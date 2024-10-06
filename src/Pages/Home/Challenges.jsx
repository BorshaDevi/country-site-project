import { useContext, useEffect, useState } from "react";
import Challenge from "./Challenge";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Challenges = () => {
    const {loading}=useContext(AuthContext)
    const [challengeLoaders,setChallengeLoaders]=useState([])
    const[filter,setFilter]=useState('')
    
    useEffect(() => {
        fetch(`https://server-site-country-project-i2f958j6z-borshadevis-projects.vercel.app/challenge?filter=${filter}`)
        .then(res => res.json())
        .then(data => setChallengeLoaders(data))
    },[filter])
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="mt-5 mb-5">
            <select onChange={(e)=>setFilter(e.target.value)} value={filter} name='season' id='season' className="select select-bordered w-full max-w-xs">
  <option value=''>Filter</option>
  <option value='Summer'>Summer</option>
  <option value='Winter'>Winter</option>
</select>
            </div>
            <div>

             <h1 className="text-center text-2xl font-bold ">Country are available</h1>
             {
                loading?<span className="loading loading-ring loading-lg text-center"></span>:<div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
               

                {
                   challengeLoaders.map(challengeLoad => <Challenge key={challengeLoad._id} challengeLoad={challengeLoad}></Challenge>)
                }
               </div>
             }
            </div>
            
        </div>
    );
};

export default Challenges;

