import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const navStyle = `text-base font-semibold hover:text-primary ml-3 px-1 py-1 xl:py-2 rounded-lg relative navbarStylingComponentsParent w-max`
  const stylingComponents = <div className='h-[2px] bg-primary absolute bottom-0 left-0 navbarStylingComponents transition-all duration-300'></div>
  const navli = <>

    <li><NavLink>Special Offer</NavLink></li>
    <li><NavLink>All-Courses</NavLink></li>
    <li><NavLink className='flex items-center gap-2'>Class 6-12<MdOutlineKeyboardArrowDown /></NavLink></li>
    <li><NavLink>Online Batch</NavLink></li>
    <li><NavLink>Free Seminar</NavLink></li>
    <li><NavLink>Success Story</NavLink></li>
    <li><NavLink>Blog</NavLink></li>
    <li><NavLink>About Us</NavLink></li>
  </>


  return (
    <>

      <div className="bg-white w-full border-b-[3px] border-gray-300 lg:hidden">
        <div className="navbar bg-base-100  flex justify-between items-center">
          <div className=" ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeNavLinknecap="round"
                    strokeNavLinknejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="w-40 dropdown-content  z-[1] mt-3  p-2 shadow bg-white text-black space-y-4 -ml-2 rounded-r-lg">
                {navli}
              </ul>
            </div>
            <div className='flex gap-5 ml-14'>
              <Link to={"/"}>
                <img className='w-24 sm:w-40' src="https://res.cloudinary.com/dramj404v/image/upload/v1725212272/SkillStationIT/icons/vvwbgeb55yfwukgfojnp.png" alt="" />
              </Link>
            </div>
          </div>

          <button className='bg-primary_red text-white px-2 py-1 rounded-lg'>All courses</button>
          
        </div>
      </div>


      {/* Desktop view  */}
      <div className='lg:flex items-center gap-8 w-11/12 justify-between mx-auto hidden'>
        <div>
          <img src="https://res.cloudinary.com/dramj404v/image/upload/v1725212272/SkillStationIT/icons/vvwbgeb55yfwukgfojnp.png" alt="" className='w-32' />
        </div>

        <div>
          <input
            type="text"
            className="p-2 border rounded-xl px-20 bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dramj404v/image/upload/v1725212662/SkillStationIT/icons/m57aev2gbbjoun8d59a9.png')`,
              backgroundPosition: '30px center', // Adjust this property
            }}
            placeholder="Search all courses"
          />
        </div>

        <div>
          <ul className='flex gap-8'>
            {navli}
          </ul>
        </div>

        <button className='bg-primary_green px-5 text-white py-1 rounded-lg'>
          লগ-ইন
        </button>
      </div>
    </>
  );
};

export default Navbar;