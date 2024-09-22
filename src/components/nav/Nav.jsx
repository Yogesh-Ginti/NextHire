import React from 'react'
import { navItems } from '../../utils/constants'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className='flex justify-between md:justify-normal items-center px-6 gap-2 md:gap-10'>
        {navItems.map(item =>
          <Link className='hover:underline decoration-orange-400' key={item.id} to={item.url}>{item.title}</Link>
        )}
      </nav>
      
    </>
  )
}

export default Nav
