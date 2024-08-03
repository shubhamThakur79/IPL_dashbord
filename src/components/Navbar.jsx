import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import InPageNavigation from './InPageNavigation'

const Navbar = () => {
  return (
    <>
      <div className=' bg-blue-900 w-[100%] h-[100px] flex items-end justify-center    m-auto'>
        <InPageNavigation teams={[{ title: "MATCHES", path: "/" }, { title: "NEWS", path: "/news" }, { title: "TABLE", path:"/pointsTable" }]}>


          {/* <Link to={"/"}><h1>Match</h1></Link>
          <Link to={"/pointsTable"}><h1>Table</h1></Link> */}
        </InPageNavigation>

      </div>
      <Outlet />
    </>
  )
}

export default Navbar

