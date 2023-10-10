import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineAppstore, AiOutlineExpand,AiOutlineUser, AiOutlineSetting} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'


const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#0f020b] text-[#f6f7ed] w-100% p">
      <div className="log">
        <img src=".../../../../../public/assets/image/top-header-logo.png" alt="" className='bg-[#868524] w-20 rounded-full shadow p-1' />
        <span></span>
      </div>
      <div className="icons flex gap-2 py-6">
        <BsSearch />
        <AiOutlineAppstore />
        <AiOutlineExpand />
        <div className="notice">
        <IoNotificationsOutline className='absolute' />
        <span className='bg-red-500 rounded-full text-xs p-1 relative'>1</span>
        </div>
        <div className="user">
          {/* <img src="" alt="" className="w-8 h-8" /> */}
          <AiOutlineUser />
          <p>User</p>
        </div>
        
        <AiOutlineSetting />
      </div>
    </div>
  )
}

export default Navbar