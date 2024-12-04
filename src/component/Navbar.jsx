import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <NavLink to='/' className='border rounded-lg text-lg border-gray-300  p-2'>Home</NavLink>
        <NavLink to='/allmovie' className='border rounded-lg text-lg border-gray-300  p-2'>All Movie</NavLink>
        <NavLink to='/tvshow' className='border rounded-lg text-lg border-gray-300  p-2'>Tv Shows</NavLink>
        <NavLink to='/addmovie' className='border rounded-lg text-lg border-gray-300  p-2'>Add Movie</NavLink>
        <NavLink to='/myfav' className='border rounded-lg text-lg border-gray-300  p-2'>My Favorites</NavLink>
        <NavLink to='/login' className='md:hidden border rounded-lg text-lg border-gray-300  p-2'>LogIn</NavLink>
        <NavLink to='/register' className='md:hidden border rounded-lg text-lg border-gray-300  p-2'>Register</NavLink>

    </>
    return (
        <div class="navbar bg-transparent sticky top-0 z-50 backdrop-blur items-center">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl">MOVIE <span className='text-red-500'>ORCHID</span></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 space-x-2">
                   {links}
                </ul>
            </div>
            <div class="navbar-end hidden md:flex items-center gap-x-3">
                <Link className='border rounded-lg text-lg border-gray-300  p-2' >LogIn</Link>
                <Link className='border rounded-lg text-lg border-gray-300  p-2' >Register</Link>
            </div>
        </div>

    );
};

export default Navbar;