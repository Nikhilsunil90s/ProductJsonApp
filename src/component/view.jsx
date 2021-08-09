import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const View = () => {
  const [item, setItem] = useState({
    name: "",
    brand: "",
    price: "",
    available: "",
    weight: "",
    options: []
  });
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState([]);
  const [qty, setQty] = useState([]);

  const { name, brand, price, options, weight } = item;
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await Axios.get(`http://localhost:3003/items/${id}`);
    console.log(result);
    setItem(result.data);
    // setOptions(result.data.options);
    setColors(result.data.options.map(opt => {
      return opt.color
    }));
    setQty(result.data.options.map(opt => {
      return opt.quantity
    }));
    setStorage(result.data.options.map(opt => {
      return opt.storage
    }));
    console.log(colors, qty, storage);
  };
  return (
    <div className="container nav_bg ">
      <div className="row mt-5 ">
        <div className="col-10 mx-auto text-center ">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
             
              {
                options && options.map(opt => {
                  return (
                    // <li>
                    // </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <span style={{ backgroundColor: opt.color, color: opt.color, height: '50px', width: '50px', border: '1px solid lightblue', borderRadius: '50%' }}> </span>
                      <span>{ opt?.storage && opt?.storage.map(st => {
    
                        return (
                           <span style={{ border: '1px solid blue' }}> { st } </span>
                        )
                      }) }</span>
                      <span class="badge badge-primary badge-pill" style={{ color: '#212529' }}> { opt.quantity } </span>

                    </li>
                  )
                })
              }
              <li class="list-group-item">Price:${price}/-</li>
              <li class="list-group-item"><Link className='btn btn-outline-success me-1' exact to={`/checkout/${id}`}>Check out</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-2">
        {/* <Link className='btn btn-outline-primary  me-1' exact to={`view`}>Check out</Link> */}
        </div>
      </div>
    </div>
  );
};
export default View;
