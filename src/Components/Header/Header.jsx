import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { Tooltip } from 'react-tooltip';

const Header = () => {
  const {user,logOut,loading}=useContext(AuthContext)
  const[theme,setTheme]=useState('light')
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme',theme)
  },[theme])
  const handleTheme=(e)=>{
    console.log(e.target.checked)
    if(e.target.checked){
      setTheme('dark')
    } else{
      setTheme('light')
    }
    console.log(theme)
  }
  
  
  const handleLogOut=()=>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
    const links=<>
     <li><NavLink to='/' className="font-semibold">Home</NavLink></li>
     <li><NavLink to='/allTouristsSpot'>All Tourists Spot</NavLink></li>
     <li><NavLink to='/addTouristsSpot'>Add Tourists Spot</NavLink></li>
     <li><NavLink to='/myList'>My List</NavLink></li>
    </>
    return (
        <div className="navbar bg-cyan-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/Tvk6VjH/4664527-2461656.jpg" />
        </div>
      </div>
          <h1 className=" text-2xl font-bold">Time to TraveL</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <label className="cursor-pointer grid place-items-center">
  <input onChange={handleTheme} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
       
{
  loading?<span className="loading loading-ring loading-lg"></span>:

  <div>
  {
      user?
      <div className="tooltip tooltip-bottom md:ml-8 ml-14" data-tip={user.displayName}>
        <div className="flex gap-2">
        <img src={user.photoURL} className="rounded-full w-12"  alt="" />
        <button className="bg-cyan-300 p-2 rounded-md" onClick={handleLogOut} >LogOut</button> 
        </div>
</div>  
 :<div className="navbar-end md:flex ml-16 space-y-1 md:space-x-1">
      <Link to='/login' className="btn">Login</Link>
      <Link to='/register' className="btn">Register</Link>
    </div>
} 
    </div> 
}  
      </div>
    );
};

export default Header;