import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from "react-router";
import { Link } from 'react-router-dom'

const Checkout = ()=> {
  const { id } = useParams();
  const [item, setItem] = useState({
    name: "",
    brand: "",
    price: "",
    available: "",
    weight: "",
    options: []
  });
  const { name, brand, price, options, weight } = item;
  useEffect(()=>{
     loadData();
    }
    ,[])

  const loadData= async ()=>{
      const result = await Axios.get(`http://localhost:3003/items/${id}`);
      console.log(result.data);
        setItem(result.data)
  }
  return (
    <>
    <div className="container">
        <h2 className="text-center">Checkout Page!</h2>
            <p className="text-center">Confirm The Product Details Below:</p>
            
            <div className="row">
                <div className="col-md-6">
                    <p>Name: {name}</p>
                </div>
                <div className="col-md-6">
                    <p>Color: </p>
                    {
                        options && options.map(opt => {
                            return <span style={{ backgroundColor: opt.color, color: opt.color, height: '50px', width: '50px', border: '1px solid lightblue', borderRadius: '50%', padding: '2px 8px'  }}> </span>
                        })
                    }


                    <p>Price: {price}</p>
                </div>

            </div>
    </div>
    </>
    )
    }

export default Checkout;
