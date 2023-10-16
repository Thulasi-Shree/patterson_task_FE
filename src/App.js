import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import ForgotPassword from "./Components/user/ForgotPassword";
import Otp from "./Components/user/otp";
import Reset from "./Components/reset";
import Fail from "./Components/user/fail";
import Register from "./Components/user/Register";
import RegisterSuccess from "./Components/user/Login";
import Home from "./Components/user/home";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register />} /> 
        <Route path="/forgot" element={<ForgotPassword />} />   
        <Route path="/otp" element={<Otp />} />  
        <Route path="/reset" element={<Reset />} />   
        <Route path="/fail" element={<Fail />} />   
        <Route path="/login" element={<RegisterSuccess />} /> 
        <Route path="/home" element={<Home />} /> 
        {/* <Route path="/login" element={<Login />} />  */}
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
