import React from "react";
import "./Creat.css";
import { useState } from "react";
import axios from "../../../Api/Api";
import { toast } from "react-toastify";

const instalinset = {
  name: "",
  lastname: "",
  age: "",
};

const Create = () => {
  const [user, setUser] = useState(instalinset);

  const handleuser = (e) => {
    e.preventDefault();
    axios
      .post("/users", user)
      .then((res) => {
        toast.success("User Created");
        console.log(res);
        setUser(instalinset);
      })
      .catch((err) => {
        console.log(err);
        toast.error("User Not Created");
      });

  };

  return (
    <>
      <div className="container">
        <div className="wrapper_creat">
        <h2 className="title">Create User</h2>
        <div className="form_container">
          <form onSubmit={handleuser} className="form">
            <label>Name</label>
            <input
            required={" "}
              value={user.name}
              onChange={(e) =>
                setUser((prew) => ({ ...prew, name: e.target.value }))
              }
              type="text"
              placeholder="Name"
            />
            <label>Last Name</label>
            <input
            required={" "}
              value={user.lastname}
              onChange={(e) =>
                setUser((prew) => ({ ...prew, lastname: e.target.value }))
              }
              type="text"
              placeholder="last name"
            />
            <label>Age</label>
            <input
              required={" "}
              value={user.age}
              onChange={(e) =>
                setUser((prew) => ({ ...prew, age: e.target.value }))
              }
              type="text"
              placeholder="age"
            />
            <button>Create</button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Create;
