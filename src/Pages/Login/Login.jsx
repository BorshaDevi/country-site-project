import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const {signIn,googleSignIn,gitSignIn} = useContext(AuthContext)
    const handleSignIn=e=> {
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        
        
          
        
    
        signIn(email,password)
        .then(result => {
            console.log(result.user)
            form.reset()
        })
        .catch(() => {
          Swal.fire({
            title: 'error',
            text: 'password should be uppercase,lowarcase,6 charater',
            icon: 'error',
            confirmButtonText: 'ok'
          })
        })
        
    }
    const handleGoogle=()=>{
        googleSignIn()
        .then(result => {
            console.log(result)
        })
        .catch(() => {
         
        })
    }
    const handleGithub=()=> {
         gitSignIn()
         .then(result => {
          console.log(result.user)
         })
         .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content ">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-cyan-400 border border-cyan-300">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email'className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="grid grid-cols-1 space-y-3">
            <button onClick={handleGoogle} className=" border flex justify-center items-center p-1 space-x-1 hover:border-cyan-500 rounded-t-md ">
                <FcGoogle ></FcGoogle>
                
                </button>
            <button onClick={handleGithub}className=" border flex justify-center items-center p-1 space-x-1  hover:border-cyan-500 rounded-t-md">
                <FaGithub ></FaGithub>
            
            </button>
        </div>
        <p>Do not your have account?Please <Link to='/register' className="text-blue-600 hover:underline">Register</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;