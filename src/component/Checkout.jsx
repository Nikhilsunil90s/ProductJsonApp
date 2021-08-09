import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from "react-router";
import { Link } from 'react-router-dom'

const Checkout = ()=> {
  const { id } = useParams();

  useEffect(()=>{
     loadData();
    }
    ,[])

  const loadData= async ()=>{
      const result = await Axios.get(`http://localhost:3003/items/${id}`);
      console.log(result.data);
  }
  return (
    <>
    <div className="container">
        <h2 className="text-center">Checkout Page!</h2>
            <p className="text-center">Confirm The Product Details Below:</p>
            
    </div>
    </>
    )
    }

export default Checkout;
