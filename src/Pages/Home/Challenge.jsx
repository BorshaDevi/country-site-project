import { Link } from "react-router-dom";


const Challenge = ({challengeLoad}) => {
    const {image,countryName,short_des,_id}=challengeLoad
    return (
        <div >
           <Link to={`/challenge/${_id}`}>
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body bg-cyan-100">
    <h2 className="card-title text-cyan-500">{countryName}</h2>
    <p>{short_des}</p>
  </div>
  <figure><img src={image} alt="Shoes" /></figure>
</div>
           </Link>
        </div>
    );
};

export default Challenge;