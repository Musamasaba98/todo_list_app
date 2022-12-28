import React from 'react'
import Feedback from '@mui/icons-material/Feedback';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>

      <div className="outlet"><Outlet/></div>
    </div>
  )
}

export default Root