
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { TbLockUp } from "react-icons/tb";
import Logout from "./Logout";
const SideBar = () => {
  const authUser = true;
  return (
    <aside
      className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r  bg-glass'
    >
      <nav className="h-full flex flex-col gap-10">


        <Link to='/' className='flex justify-center'>
          <img className='h-8' src='/github.svg' alt='Github Logo' />
        </Link>


        <Link
          to='/'
          className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
        >

          <IoHome size={30} />
        </Link>


        {authUser && (
          <Link
            to='/likes'
            className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
          >
            <FaHeart size={22} />
          </Link>
        )}

        {authUser && (
          <Link
            to='/explore'
            className='p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
          >
            <MdExplore size={25} />
          </Link>
        )}
        {!authUser && (
          <Link
            to='/login'
            className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
          >
            < IoMdLogOut size={25} />
          </Link>
        )}

{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<TbLockUp size={25} />
					</Link>
				)} 
      {authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout/>
					</div>
				)} 

      </nav>


    </aside>
  )
}

export default SideBar
