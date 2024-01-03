import React from 'react'
import Cardheader from "./card-header";
import Card from "./card";

const Groupbypriority = ({data}) => {
  return (
    <div className="userpage">
        <div className="accepted">
          <Cardheader listCategory="Todo" numbering="1" />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="todos">
          <Cardheader />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="in-progress">
          <Cardheader />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="done">
          <Cardheader />
          <Card />
          <Card />
        </div>
        <div className="canceled">
          <Cardheader />
        </div>
      </div>
  )
}

export default Groupbypriority
