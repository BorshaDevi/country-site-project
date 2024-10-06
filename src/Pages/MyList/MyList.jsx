import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import ListTable from "./ListTable";


const MyList = () => {
    const{user} =useContext(AuthContext)
    const [listDatas,setListDatas]=useState([])
    const[search,setSearch]=useState('')
    useEffect(() => {
        if(user?.email){
            fetch(`https://server-site-country-project.vercel.app/addSpotsbyemail/${user?.email}?search=${search}`)
        .then(res => res.json())
        .then(data => setListDatas(data))

        }
        
    },[user , search])
    const handleSearch=e=>{
        e.preventDefault()
       const sea=e.target.search.value;
        console.log(sea)
        setSearch(sea)
    }
    return (
        <div className="mt-5 mb-5">
          <form onSubmit={handleSearch} className="flex gap-2" >
          <input type="text" placeholder="Enter your value" name='search' className="input input-bordered w-full max-w-xs" />
          <input type="submit" placeholder="Search" className="btn" />
          </form>
        <div>
            {
              listDatas?.map((listData) => <ListTable key={listData._id} listData={listData} listDatas={listDatas} setListDatas={setListDatas}></ListTable>)
            }
            
        </div>
        </div>
    );
};

export default MyList;