import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ListTable = ({listData,listDatas,setListDatas}) => {
    const {description,photo,name,season,_id} =listData
    const handleDelete=(id)=>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/addSpots/${id}`,{
            method:'Delete',
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            // setListDatas(data)
            const remaining=listDatas.filter(listed => listed._id !== id)
            setListDatas(remaining)

          })
    
          
        }
      });
     
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Description</th>
        <th>season</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo}/>
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {description}
          
        </td>
        <td>{season}</td>
        <th className="md:space-x-2 space-y-1">
          <Link to={`/update/${_id}`}><button className="btn">Update</button></Link>
          <button onClick={() => handleDelete(_id)} className="btn ">Delete</button>
        </th>
      </tr>
      
      
      
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default ListTable;