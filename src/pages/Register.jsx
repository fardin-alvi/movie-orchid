import React, { useContext, useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaAlgolia } from "react-icons/fa";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import Lottie from "lottie-react";
import loginLotti from '../Images/login/login.json'

const Register = () => {
    const [error, seterror] = useState('')
    const navigate = useNavigate()

    const { CreateUser, setUser, updateprofile, singinWithGoogle } = useContext(Authcontext)

    const handleregister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoUrl = form.get('photoUrl')
        const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordValidate.test(password)) {
            seterror('Password must be at least 6 characters long, contain an uppercase and lowercase')
            return
        }

        CreateUser(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate('/')
                updateprofile({ displayName: name, photoURL: photoUrl })
                    .then(() => navigate('/'))
                setUser((previoususer) => ({ ...previoususer, displayName: name, photoURL: photoUrl }))
            })
            .catch(error => {
                seterror(error.message);
            })
    }
    const handleGoogle = () => {
        singinWithGoogle()
            .then(res => {
                setUser(res.user);
                navigate('/')
            })
            .catch(err => seterror(err.message))
    }
    
    return (
        <div className='bg-base-200'>
            <div className="flex justify-center items-center my-5 md:my-10">
                <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
                    <form onSubmit={handleregister}>
                        
                        <div className="mb-4">
                            <div className="relative">
                                <FaUser className="absolute top-2/4 left-3 -translate-y-2/4 text-gray-400" />
                                <input name='name' type="text" placeholder="Your Name" className="input border-b-gray-400 w-full pl-10"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <FaEnvelope className="absolute top-2/4 left-3 -translate-y-2/4 text-gray-400" />
                                <input name='email' type="email" placeholder="Your Email" className="input border-b-gray-400 w-full pl-10"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <FaAlgolia className="absolute top-2/4 left-3 -translate-y-2/4 text-gray-400" />
                                <input name='photoUrl' type="url" placeholder="Photo Url" className="input border-b-gray-400 w-full pl-10"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <FaLock className="absolute top-2/4 left-3 -translate-y-2/4 text-gray-400" />
                                <input name='password' type="password" placeholder="password" className="input border-b-gray-400 w-full pl-10"
                                />
                            </div>
                            {
                                error && (<p className='text-red-600 text-sm font-[manrope]'>{error}</p>)
                            }
                        </div>
                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                                I agree with Terms of service
                            </label>
                        </div>
                        <button className="btn bg-teal-400 w-full">Register</button>
                        <p className='my-1 text-center'>OR</p>
                        <div className="form-control">
                            <button onClick={handleGoogle} className="btn bg-teal-300">Sign with Google</button>
                        </div>
                    </form>
                    <p className="text-center mt-4 text-sm">
                        <p> Already have an Account <Link to='/login' className='text-green-500' >Log In</Link></p>
                    </p>
                </div>
                <div>
                    <Lottie animationData={loginLotti} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;