import React,{useState,useEffect} from "react";
import axios from "../../../Api/Api";
import { toast } from "react-toastify";

const Delete = () => {
  const [data, setdata] = useState(null);
  const [reload, setreload] = useState(false);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [reload]);

  const hndedelet = (id) => {
    if (window.confirm("Aare your sure")) {
      axios
        .delete(`/users/${id}`)
        .then((res) => {
          toast.success("Delete Successfully");
          setreload(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const users = data?.map((el) => (
    <div className="card" key={el.id}>
      <div className="imgs_card">
        <img src={el.avatar} alt="" />
      </div>

      <div className="text_conten">
        <h2>{el.name}</h2>
        <h3>{el.lastname}</h3>
        <p>{el.age}</p>
        <button onClick={() => hndedelet(el.id)} className="button_delet ">
          Delete
        </button>
        <button>Edit</button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <h2 className="title">Delete</h2>
        <div className="Wrapper_delet">
          { users}
        </div>
      </div>
    </>
  );
};

export default Delete;
