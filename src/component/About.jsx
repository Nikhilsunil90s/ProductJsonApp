import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const About=()=> {
  const [users,setUsers]=useState([])

  useEffect(()=>{
     loadusers();
    }
    ,[])

  const loadusers= async ()=>{
    const result= await  Axios.get('http://localhost:3003/items')

console.log(result)
setUsers(result.data)
  }

  const deleteuser= async (id)=>{

await Axios.delete(`http://localhost:3003/items/${id}`)
loadusers();
  }
  return (
    <>
      <div className='container-fluid'>
       <div className='row'>
         <div className='col-10 mx-auto'>
         <table className="table table-hover ">
  <thead>
    <tr className='table-dark align-align-items-center'>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col ">Action</th>
     
    </tr>
  </thead>

  <tbody >
  {
     users.map((elm,index)=>{
       return(
         <tr key={elm.id} >
           <td>{elm.id}</td>
           <td>{elm.name}</td>
           <td>{elm.brand}</td>
           <td>
             <Link className='btn btn-outline-primary  me-1' exact to={`view/${elm.id}`}>View</Link>
             <Link className='btn btn-outline-success me-1' exact to={`/edit/${elm.id}`}>Edit</Link>
             <Link className='btn btn-outline-warning' onClick={()=> {deleteuser(elm.id)}}>Delete</Link>
           </td>
       

         </tr>
       )
     })
   }
   
  </tbody>
</table>       
           </div>

       </div>
     </div>
    </>


  );
}

export default About;
