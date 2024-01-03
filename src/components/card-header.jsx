import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Cardheader = ({icon,listCategory,numbering}) => {
  return (
    <div className='card-header'>
        <div className="left">
            <CheckCircleIcon className='head-img'/>
            <div className="task-status">{listCategory}</div>
            <div className="task-no">{numbering}</div>
        </div>
        <div className="right">
            <div className="ad-icon">+</div>
            <div className="setting-details">...</div>
        </div>
    </div>
  )
}

export default Cardheader
