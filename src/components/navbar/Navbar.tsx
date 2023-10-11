import React from 'react'
import {FaSearch, FaExpand} from 'react-icons/fa'
import {GrAppsRounded} from 'react-icons/gr'
import {MdNotificationsNone} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import {LuSettings} from 'react-icons/lu'
import '../../styles/global.scss'


const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#0f020b] text-[#f6f7ed] w-100%">
      <div className="log">
        <img src=".../../../../../public/assets/image/top-header-logo.png" alt="" className='bg-[#868524] w-20 rounded-full shadow p-1' />
        <span></span>
      </div>
      <div className="icons flex gap-6 py-6 mr-8 font-bold">
        <FaSearch />
        <GrAppsRounded />
        <FaExpand />
        <div className="notice">
        <MdNotificationsNone />
        <span className='bg-red-500 rounded-full absolute top-1'>1</span>
        </div>
        <div className="user">
          {/* <img src="" alt="" className="w-8 h-8" /> */}
          <BiUser />
          <p>User</p>
        </div>
        
        <LuSettings />
      </div>
      
    </div>
  )
}

export default Navbar