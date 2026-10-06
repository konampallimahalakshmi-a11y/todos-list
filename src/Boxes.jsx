import React from "react";

const Boxes = () => {
  const boxData = [

    {
      title: "Total Farmers",
      value: 400,
    },
    {
      title: "Active Farmers(This Month)",
      value: 40,
    },
    {
      title: "New Farmers(This Month)",
      value: 150,
    },
    {
      title: "Repeat Farmers",
      value: 100,
    },
  ];

  return (
  
    <div className="farmer-box-container">
      {boxData.map((box) => (
        <div className="farmer-box" >
          <p className="farmer-box-title">{box.title}</p>
          <h4 className="farmer-box-value">{box.value}</h4>
        </div>
      ))}
    </div>

  );
};

export default Boxes;