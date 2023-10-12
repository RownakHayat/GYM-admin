import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { menu } from '../../../data';

const Manu = () => {
  return (
    <div className='menu'>
      {menu.map(item => (
        <div className="items" key={item.id}>
          <span className='Dashboard'>{item.title}</span>
          {item.listItems.map(listItem => (

            <Link to="/" className='list-item' key={listItem.id} >
              <img src={listItem.icon} alt="" className='w-10' />
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}

    </div>
  )
}

export default Manu