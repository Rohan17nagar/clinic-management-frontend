import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Patients from "../pages/Patients";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/patients' element={<Patients />} />
      </Routes>
    </BrowserRouter>
  );
}
