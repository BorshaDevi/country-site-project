import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import ListTable from "./ListTable";


const MyList = () => {
    const{user} =useContext(AuthContext)
    const [listDatas,setListDatas]=useState([])
    
    useEffect(() => {
        if(user?.email ){
          
            fetch(`https://server-site-country-project-i2f958j6z-borshadevis-projects.vercel.app/addSpotsbyemail/${user?.email}`)
        .then(res => res.json())
        .then(data => setListDatas(data))

        }
        
    },[user ])
   
    return (
        <div >
          
         
          
        <div>
            {
              listDatas?.map((listData) => <ListTable key={listData._id} listData={listData} listDatas={listDatas} setListDatas={setListDatas}></ListTable>)
            }
            
        </div>
        </div>
    );
};

export default MyList;