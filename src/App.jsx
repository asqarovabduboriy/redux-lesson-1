import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Admin from "./Components/Page/Admin/Admin";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Page/Home/Home";
import Bg from "./Components/Bg/Bg";
import Create from "./Components/Page/Admin/Create/Create";
import Delete from "./Components/Page/Admin/Delete/Delete";
import { useState } from "react";
function App() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Bg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<Create />} />
          <Route path="delete" element={<Delete loading={loading} setLoading={setLoading} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
