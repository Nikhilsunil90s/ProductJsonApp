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
  });
  const { name, brand, price, available, weight } = item;
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await Axios.get(`http://localhost:3003/items/${id}`);
    console.log(result);
    setItem(result.data);
  };
  return (
    <div className="container nav_bg ">
      <div className="row mt-5 ">
        <div className="col-10 mx-auto text-center ">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Brand:{brand}</li>
              <li class="list-group-item">Price:${price}/-</li>
              <li class="list-group-item"><Link className='btn btn-outline-success me-1' exact to={`/edit`}>Check out</Link></li>
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
