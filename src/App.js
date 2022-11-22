import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import RegisterationForm from "./components/registeration-form";
const App = () => {
  return (
    <div>
       <Router>
       <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/register" element={<RegisterationForm />} />

       </Routes>
       
       </Router>
      <>
    
        

      </>
    </div>
  );
};

export default App;
