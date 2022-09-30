import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllForms from "./components/FormHandling/AllForms";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Allforms" element={<AllForms/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
