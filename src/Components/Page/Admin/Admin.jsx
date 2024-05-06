import React from "react";
import './Admin.css';
import { Link,Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="admin">
      <div className="sidebar">
         <div className="container">
            <ul>
             <Link to={"create"} className="active_li" ><li>Admin create product</li></Link>
             <Link to={"delete"} className="active_li" ><li>Admin delete product</li></Link>
            </ul>
         </div>
      </div>
      <div className="container">
          <Outlet/>
      </div>
      </div>
    </>
  );
};

export default Admin;
