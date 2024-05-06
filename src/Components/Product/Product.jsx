import { useEffect, useState } from "react";
import React from "react";
import axios from "../Api/Api";
import { toast } from "react-toastify";

const Product = () => {
  const [data, setdata] = useState(null);
  const [reload, setreload] = useState(false);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [reload]);

  

  const users = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="imgs_card">
        <img src={el.avatar} alt="" />
      </div>

      <div className="text_conten">
        <h2>{el.name}</h2>
        <h3>{el.lastname}</h3>
        <p>{el.age}</p>

      </div>
    </div>
    
  ));

  return (
    <>
      <div className="container">
        <h2 className="title">Product</h2>
        <div className="Wrapper">{users}</div>
        
      </div>
    </>
  );
};

export default Product;
