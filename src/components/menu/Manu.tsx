import React from 'react'
import {Link} from "react-router-dom"
import {IoHome}from 'react-icons/io5'
const Manu = () => {
  return (
    <div className='menu'>
      <div className="items flex-row gap-2">
        <Link to='/' >
        <IoHome />
        <span className=''>Dashboard</span>
        </Link>
      </div>
      <div className="items">
        <Link to='/' >
        <IoHome />
        <span className=''>Dashboard</span>
        </Link>
      </div>
      <div className="items">
        <Link to='/' >
        <IoHome />
        <span className=''>Dashboard</span>
        </Link>
      </div>
      <div className="items">
        <span>Dashboard</span>
        <Link to='/' >
        <IoHome />
        <span className=''>Dashboard</span>
        </Link>
      </div>
      
    </div>
  )
}

export default Manu