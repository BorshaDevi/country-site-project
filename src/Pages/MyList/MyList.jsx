import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import ListTable from "./ListTable";


const MyList = () => {
    const{user} =useContext(AuthContext)
    const [listDatas,setListDatas]=useState([])
    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:5000/addSpotsbyemail/${user?.email}`)
        .then(res => res.json())
        .then(data => setListDatas(data))

        }
        
    },[user])
    return (
        <div>
            {
              listDatas?.map((listData) => <ListTable key={listData._id} listData={listData} listDatas={listDatas} setListDatas={setListDatas}></ListTable>)
            }
            
        </div>
    );
};

export default MyList;