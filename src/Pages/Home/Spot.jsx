import { Flip} from "react-awesome-reveal";
import { Link } from "react-router-dom";


const Spot = ({spot}) => {
    const {photo,description,country,_id} =spot
    return (
        <div className="mt-10">
          <Flip cascade damping={0.1}>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{country}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <Link to={`/viewPage/${_id}`}><button className="btn">View Details</button></Link>
    </div>
  </div>
</div>


</Flip>
        </div>
    );
};

export default Spot;