import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card.jsx";
import Cardheader from "../components/card-header.jsx";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Groupbyuser from "../components/groupbyuser.jsx";

const Main = () => {
  const [res, setRes] = useState();
  useEffect(() => {
    fetchdata();
  }, []);
  
  const fetchdata = async () => {
    const response = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    console.log(response.data);
    setRes(response.data);
  };

  return (
    <div>
      <header>
        <div className="selectbtn">
          <TuneIcon /> Display <KeyboardArrowDownIcon />
        </div>
        <div className="activeOnHover">
          <div className="row1">
            <div className="filter">Grouping</div>
            <select name="" id="">
              <option value="Status">Status</option>
              <option value="Done">Done</option>
              <option value="InProgress">In Progress</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div className="row2">
            <div className="filter">Ordering</div>
            <select name="" id="">
              <option value="">Priority</option>
              <option value="">Done</option>
              <option value="">In Progress</option>
              <option value="">Canceled</option>
            </select>
          </div>
        </div>
      </header>
      <Groupbyuser />
    </div>
  );
};

export default Main;
