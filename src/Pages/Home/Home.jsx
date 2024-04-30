import AllEuropeCountry from "./AllEuropeCountry";
import Bannar from "./Bannar";
import Challenges from "./Challenges";
import Review from "./Review";
import TouristsSpot from "./TouristsSpot";



const Home = () => {
    return (
        <div>
            <Bannar ></Bannar>
            <TouristsSpot ></TouristsSpot>
            <AllEuropeCountry></AllEuropeCountry>
            <Challenges></Challenges>
            <Review></Review>
        </div>
    );
};

export default Home;