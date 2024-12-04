import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext)
    console.log(user);
    const links = <>
        <NavLink to='/' className='border rounded-lg text-lg border-gray-300  p-2'>Home</NavLink>
        <NavLink to='/allmovie' className='border rounded-lg text-lg border-gray-300  p-2'>All Movie</NavLink>
        <NavLink to='/tvshow' className='border rounded-lg text-lg border-gray-300  p-2'>Tv Shows</NavLink>
        <NavLink to='/login' className='md:hidden border rounded-lg text-lg border-gray-300  p-2'>LogIn</NavLink>
        <NavLink to='/register' className='md:hidden border rounded-lg text-lg border-gray-300  p-2'>Register</NavLink>
        {
            user && <>
                <NavLink to='/addmovie' className='border rounded-lg text-lg border-gray-300  p-2'>Add Movie</NavLink>
                <NavLink to='/myfav' className='border rounded-lg text-lg border-gray-300  p-2'>My Favorites</NavLink>
            </>
        }

    </>
    const handlelogout = () => {
        logout()
            .them(res => {
                console.log(res.user);
                navigate('/login')
            })
            .cath(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="navbar bg-transparent sticky top-0 z-50 backdrop-blur items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">MOVIE <span className='text-red-500'>ORCHID</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                   {links}
                </ul>
            </div>
            <div className="navbar-end md:flex items-center gap-x-3">
                {
                    user ?
                        <div className='flex'>
                            {user.photoURL ? (
                                <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User" title={user.displayName} />) : (<FaUserCircle className="w-10 h-10 text-gray-500" title="User Icon" />)
                            }
                            <p className=" text-white text-sm opacity-0 hover:opacity-200">
                                {user?.displayName}
                            </p>
                            <Link to='/login' onClick={handlelogout} className="btn -ml-6">Log Out</Link>
                        </div> : <div className='className="flex flex-col items-center ' >
                            <Link to='/login' className='border rounded-lg text-lg border-gray-300 md:mr-2 p-2' >LogIn</Link>
                            <Link to='/register' className='border rounded-lg text-lg border-gray-300 p-2' >Register</Link>
                        </div>
                }
            </div>
        </div>

    );
};

export default Navbar;