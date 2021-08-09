import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router'

const EditUsers=()=>{
  const[item,setitem]=useState({
name:"",
    brand:"",
    price:'',
    available:'',
    weight:''
   
  })
const history=useHistory();
const {id}=useParams();

useEffect(()=>{
loadUsers();
},[])

const { name,brand,price,available,weight }=item;
  const onChangeHandler=(e)=>{

   setitem({...item,[e.target.name]:e.target.value})

  }

  const onSubmitHandler= async(e)=>{
     e.preventDefault();
     await Axios.put(`http://localhost:3003/items/${id}`,item)
     history.push('/about')

  }
  const loadUsers= async ()=>{
      const result= await Axios.get(`http://localhost:3003/items/${id}`)
      setitem(result.data)
  }
return(
    <>
    <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <form className='col-6 align-content-between' onSubmit={e=>onSubmitHandler(e)}>
  <div className="mb-3 ">
    <label for="" className="form-label">Name</label>
    <input type="text" className="form-control" name= 'name' value={name} 
    onChange={(e)=>onChangeHandler(e)}
    />
    
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Brand</label>
    <input type="text" className="form-control" name='username' value={brand}
    onChange={(e)=>onChangeHandler(e)}
    aria-hidden='false'/>
    
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Price</label>
    <input type="email" className="form-control" name='email'
    onChange={(e)=>onChangeHandler(e)}
    value={price}/>
    
  </div>
  <div className="mb-3">
    <label for="" className="form-label">Available</label>
    <input type="boolean" className="form-control" name='mobile' onChange={(e)=>onChangeHandler(e)}value={available} />
    
  </div>
  
  <div className="mb-3">
    <label for="" className="form-label">Weight</label>
    <input type="text" className="form-control" name='website' onChange={(e)=>onChangeHandler(e)} value={weight} />
    
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        </div>

    </div>
    
    </>
)
}
export default EditUsers;