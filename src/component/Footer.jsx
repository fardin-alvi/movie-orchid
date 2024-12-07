import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content py-10 px-6 lg:px-24">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3">
                <div className='lg:text-left'>
                    <h1 className="text-2xl font-bold">MOVIE ORCHID</h1>
                    <p className="mt-2">
                        © 2024 MOVIE ORchid. All rights reserved.
                    </p>
                    <div className="mt-4 flex justify-center md:justify-start space-x-3">
                        <a className="text-2xl text-blue-600 hover:text-blue-800">
                            <FaFacebook />
                        </a>
                        <a className="text-2xl text-pink-500 hover:text-pink-700">
                            <FaInstagram />
                        </a>
                        <a className="text-2xl text-red-600 hover:text-red-800">
                            <FaYoutube />
                        </a>
                        <a className="text-2xl text-blue-400 hover:text-blue-600">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
                <div className='lg:text-left mt-3 lg:ml-16'>
                    <h2 className="footer-title text-lg font-semibold">Usefull Links</h2>
                    <ul className="mt-2 space-y-1">
                        <li><a className="link link-hover">About</a></li>
                        <li><a className="link link-hover">Gallery</a></li>
                        <li><a className="link link-hover">Service Plus</a></li>
                        <li><a className="link link-hover">Privacy Policy</a></li>
                        <li><a className="link link-hover">Contacts</a></li>
                    </ul>
                </div>
                <div className='lg:text-left mt-3'>
                    <h2 className="footer-title text-lg  font-semibold">Contact Us</h2>
                    <ul className="mt-2">
                        <li>123 George Street</li>
                        <li>Sydney, NSW 2000</li>
                        <li>Australia</li>
                        <li className='mt-5'>
                            Email: <span>support@movieorchid.com</span>
                            <br />
                            Phone: <span>+1 (234) 567-890</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;