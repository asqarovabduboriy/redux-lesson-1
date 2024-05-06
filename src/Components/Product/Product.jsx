import React, { useEffect, useState } from "react";
import axios from "../Api/Api";
import { toast } from "react-toastify";
import Loader from "../Loader/Loadaer"; 

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const length = data?.length;
console.log(length);
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
    <div className="container">
      <h2 className="title">Product</h2>
      <div className="Wrapper">
        {loading ? <Loader dataLength={length} /> : users}
      </div>
    </div>
  );
};

export default Product;
