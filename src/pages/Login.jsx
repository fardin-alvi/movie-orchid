import React, { useContext, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from 'react-hook-form';

const Login = () => {
    const { login, setUser, singinWithGoogle } = useContext(Authcontext)
    const [error, seterror] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data;
        login(email, password)
            .then(res => {
                const user = res.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                seterror("Credential is Incorrect");
            });
    };
    const handleGoogle = () => {
        singinWithGoogle()
            .then(res => {
                setUser(res.user);
                navigate('/')
            })
            .catch(err => seterror(err.message))
    }
    return (
        
        <div>
            <nav>
                <Navbar/>
            </nav>
            <div className="flex justify-center items-center my-5 md:my-10">
                <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="mb-4">
                            <div className="relative">
                                <FaEnvelope className="absolute top-2/4 left-3 -translate-y-2/4 text-gray-400" />
                                <input {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'Invalid email format' } })} type="email" placeholder="Your Email" className="input border-b-gray-400 w-full pl-10" />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <div className="relative">
                                <FaLock className="absolute top-2/4 left-3 -translate-y-2/4 text-gray-400" />
                                <input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" className="input border-b-gray-400 w-full pl-10"/>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <div className="flex items-center my-2">
                            <Link>Forget Password</Link>
                        </div>
                        <p className="text-red-500 text-sm text-left my-2">{error}</p>
                        <button className="btn bg-teal-400 w-full">Log In</button>
                        <p className='my-1 text-center'>OR</p>
                        <div className="form-control">
                            <button onClick={handleGoogle} type="button" className="btn bg-teal-300">Sign in with Google</button>
                        </div>
                    </form>
                    <p className="text-center mt-4 text-sm">
                        Haven't any Account? <Link to='/register' className='text-green-500'>Register</Link>
                    </p>
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Login;