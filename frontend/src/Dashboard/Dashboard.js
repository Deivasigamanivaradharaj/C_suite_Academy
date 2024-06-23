import React from 'react'
import './Dashboard.css'
import Sidebar from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='Dashboard'>
      <Sidebar/>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard