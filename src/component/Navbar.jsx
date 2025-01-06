import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import { BsSun, BsMoon } from 'react-icons/bs';
import logo from '../../public/logo.png';

const Navbar = () => {
    const { user, logout } = useContext(Authcontext);
    const [theme, setTheme] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `p-2 rounded-md ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/allmovie"
                className={({ isActive }) =>
                    `p-2 rounded-md ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                }
            >
                All Movies
            </NavLink>
            <NavLink
                to="/tvshow"
                className={({ isActive }) =>
                    `p-2 rounded-md ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                }
            >
                TV Shows
            </NavLink>
            {!user && (
                <>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `p-2 rounded-md md:hidden ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                        }
                    >
                        LogIn
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            `p-2 rounded-md md:hidden ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                        }
                    >
                        Register
                    </NavLink>
                </>
            )}
            {user && (
                <>
                    <NavLink
                        to="/addmovie"
                        className={({ isActive }) =>
                            `p-2 rounded-md ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                        }
                    >
                        Add Movie
                    </NavLink>
                    <NavLink
                        to="/myfav"
                        className={({ isActive }) =>
                            `p-2 rounded-md ${isActive ? 'bg-teal-400 text-white' : 'hover:bg-gray-200 hover:text-teal-600'}`
                        }
                    >
                        My Favorites
                    </NavLink>
                </>
            )}
        </>
    );

    useEffect(() => {
        const checktheme = localStorage.getItem('theme');
        if (checktheme) {
            setTheme(checktheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const handletheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handlelogout = () => {
        logout()
            .then(() => {
                navigate('/login');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg">
            <div className="w-11/12 mx-auto flex items-center justify-between py-3">
                <div className="flex items-center">
                    <div className="dropdown md:hidden">
                        <label tabIndex="0" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <img className="w-16 h-auto" src={logo} alt="Logo" />
                </div>
                <div className="hidden md:flex items-center space-x-4">{links}</div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handletheme}
                        className="p-2 rounded-full bg-gray-200 text-teal-500 dark:bg-gray-700 dark:text-yellow-300"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? <BsSun /> : <BsMoon />}
                    </button>
                    {user ? (
                        <div className="flex items-center space-x-2">
                            {user.photoURL && (
                                <img
                                    className="w-10 h-10 rounded-full object-cover hidden lg:block"
                                    src={user.photoURL}
                                    alt="User"
                                    title={user.displayName}
                                />
                            )}
                            <button
                                onClick={handlelogout}
                                className="px-4 py-2 rounded-md  text-white"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link to="/login" className="hidden md:block px-4 py-2 bg-gray-200 text-teal-600 rounded-md">
                                LogIn
                            </Link>
                            <Link to="/register" className="hidden md:block px-4 py-2 bg-gray-200 text-teal-600 rounded-md">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
