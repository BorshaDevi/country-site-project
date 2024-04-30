
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const AddSport = () => {
    const {user} =useContext(AuthContext)
    const handleSubmit=(e)=> {
        e.preventDefault()
        const form=e.target;
        const spotName=form.spotName.value;
        const country=form.country.value;
        const location=form.location.value;
        const description=form.description.value;
        const cost=form.cost.value;
        const season=form.season.value;
        const time=form.time.value;
        const perYear=form.perYear.value;
        const email=form.email.value;
        const name=form.name.value;
        const photo=form.photo.value;
        const user={spotName,country,location,description,cost,season,time,perYear,email,name,photo}
        console.log(user)
        fetch('https://server-site-country-project-fdvbc0v58-borshadevis-projects.vercel.app/addSpots',{
            method:"POST",
            headers:{
                "content-Type":'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                form.reset()
                Swal.fire({
                    title: 'success',
                    text: 'Added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }

        })

    }
    return (
        <div className="mx-auto max-w-6xl">
            <div className="bg-cyan-300">
            <h2 className="text-center text-xl font-semibold">Add Tourists Spot</h2>
            <form   onSubmit={handleSubmit} className="p-5" >
                {/* 1st */}
                <div className="lg:grid lg:grid-cols-2  gap-5 lg:p-5 ">
                <div>
                <label htmlFor="name" className="lg:ml-3">Tourists Spot Name</label><br />
                <input type="text" name='spotName' placeholder=" Enter your spot name" className="lg:ml-5 w-full p-3 rounded-t-md"  />
                </div>
                <div>
                <label htmlFor="Country">Country of name</label>

                <select name="country" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Netherlands">Netherlands</option>
                <option value="England">England</option>
                <option value="Switzerland">Switzerland</option>
                </select>
                </div>
                </div>
                {/* 2nd */}
                <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5 ">
                <div>
                <label htmlFor="location" className="lg:ml-3">Location</label><br />
                <input type="text" name='location' placeholder=" location" className="lg:ml-5 w-full p-3 rounded-t-md"  />
                </div>
               <div>
               <label htmlFor="short description" className="lg:ml-3">Short description</label><br />
                <input type="text" name='description' placeholder="description" className="lg:ml-5 w-full p-3 rounded-t-md"  />
               </div>
                </div>

                {/* 3rd */}
                <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
                <div>
                <label htmlFor="Average Cost" className="lg:ml-3">Average Cost</label><br />
                <input type="text" name='cost' placeholder="Average Cost" className="lg:ml-5 w-full p-3 rounded-t-md"  />
                </div>
                <div>
                <label htmlFor="seasonality">seasonality</label>

                <select name="season" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
               
                </select>
                </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
                <div>
                <label htmlFor="Travel time">Travel time</label>

                <select name="time" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
                <option value="7days">7days</option>
                <option value="10days">10days</option>
                <option value="15days">15days</option>
                <option value="20days">20days</option>
                </select>
                </div>
                <div>
                <label htmlFor="TotaVisitorsPerYear">totaVisitorsPerYear</label>

                <select name="perYear" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
                <option value="10k">10k</option>
                <option value="15k">15k</option>
                <option value="20k">20k</option>
                <option value="30k">30k</option>
                </select>
                </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
                <div>
                <label htmlFor="Email" className="lg:ml-3">Email</label><br />
                <input type="email" name='email' placeholder="Your Email" defaultValue={user.email} className="lg:ml-5 w-full p-3 rounded-t-md"  />
                </div>
                <div>
                <label htmlFor="name" className="lg:ml-3">Name</label><br />
                <input type="text" name='name' placeholder="Your name" defaultValue={user.displayName} className="lg:ml-5 w-full p-3 rounded-t-md"  />
                </div>
                
                </div>
                {/* photo */}
                <div className="lg:mr-5 lg:ml-5">
                <label htmlFor="Image" className="lg:ml-3">Image</label><br />
                <input type="text" name='photo' placeholder=" Photo" className="lg:ml-5 w-full p-3 rounded-t-md"  />
                </div>
                <input type="submit" className=" mt-3 btn w-64 ml-20 lg:ml-96"  value='Add' />
            </form>
            </div>
        </div>
    );
};

export default AddSport;