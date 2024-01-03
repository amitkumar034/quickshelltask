import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card.jsx";
import Cardheader from "../components/card-header.jsx";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Groupbyuser from "./groupbyuser.jsx";
import Status from "./Status.jsx"

const Main = () => {
  const [btnClicked, setBtnClicked] = useState(false)
  const [grouping, setGrouping] = useState("Status")
  const [ordering, setOrdering] = useState("Priority")
  const [res, setRes] = useState();
  useEffect(() => {
    fetchdata();
  }, []);
  
  const fetchdata = async () => {
    const response = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    // console.log(response.data);
    setRes(response.data);
  };
  const handleBtn = ()=>{
      setBtnClicked(!btnClicked)
  }

  const handleGrouping = (e)=>{
      setGrouping(e.target.value)
  }
  const handlePriority =(e)=>{
      setOrdering(e.target.value)
  }

  return (
    <div>
      <header>
        <div className="selectbtn" onClick={()=> handleBtn()}>
          <TuneIcon /> Display <KeyboardArrowDownIcon />
        </div>
        {btnClicked && <div className="activeOnHover">
        <div className="row1">
          <div className="filter">Grouping</div>
          <select value={grouping} onChange={(e)=>handleGrouping(e)}>
            <option value="Status">Status</option>
            <option value="User">User</option>
          </select>
        </div>
        <div className="row2">
          <div className="filter">Ordering</div>
          <select value={ordering} onChange={(e)=>handlePriority(e)}>
            <option value="Priority">Priority</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>}
      </header>
     { grouping==="User" && <Groupbyuser/>}
     {grouping==="Status" && <Status/>}
    </div>
  );
};

export default Main;
