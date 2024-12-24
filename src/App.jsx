import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./component/News";
import Weather from "./component/weather";
import Dashboard from "./component/Dashboard";
import Nav from "./component/Nav";



function App() {
  
  return (
    
    <Router>
    
    
     <Nav />
      <Routes>
        
          <Route path="dashboard" element={<Dashboard />} />
        <Route path="weather" element={<Weather />} />
        <Route path="news" element={<News />} />

    
    
    
    </Routes>
    </Router>
  );
};

export default App;
