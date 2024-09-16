import React, { useContext, useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { UserContext } from '../../App';
import {logout} from "../../hooks/Logout.js";

// Navigation Links Array
export const NavLinks = [
  { id: '1', name: 'HOME', link: '/home' },
  { id: '2', name: 'ABOUT', link: '/about1' },
  { id: '3', name: 'STORE', link: '/storepage' },
  { id: '4', name: 'INFORMATION', link: '/information' },
  { id: '5', name: 'BOOKING', link: '/booking' },
  { id: '6', name: 'CONTACT US', link: '/contactus' },
];

//logout
const handleLogout = () => {
    logout();
}

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const {user} = useContext(UserContext);

  //const loggeduser = JSON.parse(localStorage.getItem("auth_user"));



  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
      <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 h-20">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/home">
            <div className="text-3xl font-bold font-serif">SOLID</div>
          </Link>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex gap-8">
              {NavLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                        className="inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                        to={data.link}
                    >
                      {data.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Icons for Theme Toggle and User Login */}
          <div className="flex items-center space-x-8">
            {/* Theme Toggle */}
            <button
                className="text-2xl cursor-pointer"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <BiSolidSun/> : <BiSolidMoon/>}
            </button>

            {/* User Login Icon */}
            {user ?
                <div className='text-orange-500'>
                  <div className='bg-black size-6 rounded-full' onClick={()=>document.getElementById('my_modal_1').showModal()}>
                    {/* {loggeduser.username} */}
                  </div>

                </div> :
                <Link to="/login" className="text-2xl">
                  {theme === 'dark' ? <FaRegUser/> : <FaUser/>}
                </Link>
            }


            {/* Mobile Menu Toggle Icon */}
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {showMenu ? <HiMenuAlt1/> : <HiMenuAlt3/>}
            </button>
          </div>
        </div>

        {/*LogOut Message*/}
        <dialog id="my_modal_1" className="modal">
          <div className="size-96 bg-white rounded-2xl flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold mt-2">Logout</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="size-32 text-red-500 mt-2">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
                  </svg>


                  <div className="mt-2">
                      <p className="font-bold">Are Your Sure want to Logout ?</p>
                  </div>

              </div>
              <form className="flex justify-center items-center mt-4 gap-4">
                  <button className="btn bg-red-400" onClick={handleLogout}>Logout</button>
                  <button className="btn">Cancel</button>
              </form>

          </div>
        </dialog>

          {/* Mobile Responsive Menu */}
          <ResponsiveMenu showMenu={showMenu}/>
      </nav>


  );
};

export default Navbar;
