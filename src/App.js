import React from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Boxes from "./Boxes.jsx";
import Dashboard from "./Dashboard.jsx";
import  Sub from "./Sub.jsx";

import "./App.css";
import "./sidebar.css";
import "./boxes.css";
import "./dashboard.css";
import "./Header.css";

const App = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />
      

        <div className="main">
          <Header />
          
          <Boxes />
            <Sub/>
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
