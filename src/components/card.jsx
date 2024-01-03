import React from 'react'
import userimg from "../assets/images/user-img.jpeg"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Card = ({ticketTitle,cardName}) => {
  return (
    <div className='card'>
      <div className="top">
      <div className="name">{cardName}</div>
      <img src={userimg} alt="" />
      </div>
      <div className="task">{ticketTitle}</div>
      <div className="bottom">
      <div className="setting"><MoreHorizIcon/></div>
      <div className="feature-request">Feature request</div>
      </div>
    </div>
  )
}

export default Card
