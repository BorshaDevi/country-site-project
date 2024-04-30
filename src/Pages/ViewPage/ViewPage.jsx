import { useLoaderData } from "react-router-dom";
import { TfiLocationArrow } from "react-icons/tfi";
import { Typewriter } from 'react-simple-typewriter'
const ViewPage = () => {
    const viewData=useLoaderData()
    const {spotName,country,photo,description,
      location,
      perYear, 
time,} =viewData






const handleDone = () => {
  console.log(`Done after 5 loops!`)
}
    return (
      <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{country}</h1>

          <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Choose your destination{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ "France",
               "Italy",
               'Spain',
               'England',
               'Netherlands',
               'Switzerland']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            
          />
        </span>
      </h1>







          <p className="py-6">{description}</p>
        </div>
        <div className="flex">
        <TfiLocationArrow />
        {location}
        </div>
        <div className="flex gap-2">
        <p>{spotName}</p>
        <p>{perYear}</p>
        <p>{time}</p>
        </div>
        
      </div>
    </div>
    );
};

export default ViewPage;