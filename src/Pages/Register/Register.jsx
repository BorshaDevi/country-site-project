import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
    const {createUser} =useContext(AuthContext)
    const pass= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const handleSubmit=e=> {
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
        console.log(name,email,password,photo)
        if( !pass.test(password)){
          Swal.fire({
            title: 'error',
            text: 'password should be uppercase,lowarcase,6 charater',
            icon: 'error',
            confirmButtonText: 'ok'
          })
          return;
        }
        createUser(email,password)
        .then(result => {
            form.reset()
            
            Swal.fire({
              title: 'successfully',
              text: 'Your register successfully',
              icon: 'success',
              confirmButtonText: 'ok'
            }
            )
        })
        .catch(error => {
         
          console.log(error)})

    }
    return (
        <div className="hero min-h-screen   ">
        <div className="hero-content ">
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-cyan-400 border border-cyan-300">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo" name='photo' className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Do your have any account?Please <Link to='/login' className="text-blue-600 hover:underline">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;