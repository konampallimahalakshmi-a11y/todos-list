import React, { useState } from "react";

import group from "./assets/group.svg";
import profile1 from "./assets/profile1.svg";
import profile2 from "./assets/profile2.svg";
import profile3 from "./assets/profile3.svg";
import profile4 from "./assets/profile4.svg";
import profile5 from "./assets/profile5.svg";
import trash from "./assets/trash.svg";
import searchbar from "./assets/searchbar.svg";

const Dashboard = () => {
  const farmers = [
    {
      id: 1,
      profile: profile1,
      farmerId: "F0021",
      name: "Darlene Robertson",
      dobAge: "29/04/1988 | 34",
      gender: "Male",
      pincode: "56059",
      mobile: "+91 0987654321",
      store: "bangalore",
      purchase: "4344",
    },
    {
      id: 2,
      profile: profile2,
      farmerId: "F0022",
      name: "Cody Fisher",
      dobAge: "-",
      gender: "-",
      pincode: "560059",
      mobile: "+91 0987654321",
      store: "Andhra Pradesh",
      purchase: "4344",
    },
    {
      id: 3,
      profile: profile3,
      farmerId: "F0023",
      name: "Eleanor Pena",
      dobAge: "19/04/1987 | 36",
      gender: "Female",
      pincode: "560060",
      mobile: "+91 0987654321",
      store: "karnataka",
      purchase: "4344",
    },
    {
      id: 4,
      profile: profile4,
      farmerId: "F0024",
      name: "Arlenen McCoy",
      dobAge: "14/04/1986 | 34",
      gender: "Male",
      pincode: "56059",
      mobile: "+91 0987654321",
      store: "bangalore",
      purchase: "4344",
    },
    {
      id: 5,
      profile: profile5,
      farmerId: "F0025",
      name: "Bessie Cooper",
      dobAge: "29/04/1988 | 34",
      gender: "Male",
      pincode: "56059",
      mobile: "+91 0987654321",
      store: "karnataka",
      purchase: "4344",
    },
    {
      id: 6,
      profile: profile3,
      farmerId: "F0023",
      name: "Eleanor Pena",
      dobAge: "19/04/1987 | 36",
      gender: "Female",
      pincode: "560060",
      mobile: "+91 0987654321",
      store: "Andhra pradesh",
      purchase: "4344",
    },
    {
      id: 7,
      profile: profile5,
      farmerId: "F0025",
      name: "Bessie Cooper",
      dobAge: "29/04/1988 | 34",
      gender: "Male",
      pincode: "56059",
      mobile: "+91 0987654321",
      store: "karnataka",
      purchase: "4344",
    },
    {
      id: 8,
      profile: profile3,
      farmerId: "F0023",
      name: "Eleanor Pena",
      dobAge: "19/04/1987 | 36",
      gender: "Female",
      pincode: "560060",
      mobile: "+91 0987654321",
      store: "bangalore",
      purchase: "4344",
    },
    {
      id: 9,
      profile: profile5,
      farmerId: "F0025",
      name: "Bessie Cooper",
      dobAge: "29/04/1988 | 34",
      gender: "Male",
      pincode: "56059",
      mobile: "+91 0987654321",
      store: "Andhra pradesh",
      purchase: "4344",
    },
  ];
  const [search, setsearch] = useState("");
  const [gender, setgender] = useState("");
  const [store, setstore] = useState("");
  const filteredFarmers = farmers.filter((farmer) => {
  const srcbar =
  search === "" ||
   farmer.farmerId.toUpperCase().startsWith(search.toUpperCase());

    const genderMatch = gender === "" || farmer.gender === gender;

    const storeMatch = store === "" || farmer.store === store;

    return srcbar && genderMatch && storeMatch;
  });
  return (
    <div className="container">
      <div className="filter-container">
        <div className="search-container">
          <img src={searchbar} alt="Search" />
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="inputarea"
            placeholder="Search Name, Code, Pincode etc.."
          />
        </div>
        <select
          className="gender-select"
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        >
          <option  value="">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="store-input"
          value={store}
          onChange={(e) => setstore(e.target.value)}
        >
          <option value="">
            Store
          </option>
          <option value="Andhra pradesh">Andhra pradesh</option>
          <option value="karnataka">karnataka</option>
          <option value="bangalore">bangalore</option>
        </select>

        <button 
          className="clear-button"
          onClick={(e) =>  {
            setsearch("");
            setgender("");
            setstore("");
          }}
        >
          <img src={trash} alt="Clear" />
          <span>Clear All</span>
        </button>
      </div>
      <div className="tablegrid tableheader">
        <div className="serialnum">
          <h5>S.no</h5>
          <img className="arc" src={group} alt="Sort" />
        </div>

        <div className="serialnum">
          <h5>Farmer ID</h5>
          <img className="arc" src={group} alt="Sort" />
        </div>

        <div className="serialnum">
          <h5>Farmer Name</h5>
          <img className="arc" src={group} alt="Sort" />
        </div>

        <div className="table-heading">
          <h5>Dob | Age</h5>
        </div>

        <div className="table-heading">
          <h5>Gender</h5>
        </div>

        <div className="table-heading">
          <h5>Pincode</h5>
        </div>

        <div className="table-heading">
          <h5>Mobile Number</h5>
        </div>

        <div className="table-heading">
          <h5>Store Location</h5>
        </div>

        <div className="table-heading purchase-heading">
          <h5>Purchase Value</h5>
          <img className="arc" src={group} alt="Sort" />
        </div>
      </div>

      {filteredFarmers.map((farmer) => (
        <React.Fragment key={farmer.id}>
          <div className="tablegrid table-row">
            <p className="table">{farmer.id}.</p>
            <p className="formid">{farmer.farmerId}</p>

            <div className="farmer-name">
              <img src={farmer.profile} alt="Profile" />
              <p className="nameid">{farmer.name}</p>
            </div>

            <p>{farmer.dobAge}</p>
            <p>{farmer.gender}</p>
            <p>{farmer.pincode}</p>
            <p className="mob">{farmer.mobile}</p>
            <p className="sto">{farmer.store}</p>
            <h4>{farmer.purchase}</h4>
          </div>

          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Dashboard;
