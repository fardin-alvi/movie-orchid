import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AiFillDelete, AiOutlineHeart } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Authcontext } from '../Provider/Authprovider';

const Moviedetails = () => {
    const loadedmovie = useLoaderData()
    const [movies, setmovies] = useState(loadedmovie)
    const navigate = useNavigate()
    const { user } = useContext(Authcontext) 
    const { _id, poster, title, genre, duration, releaseYear, rating, summary } = loadedmovie

    const handledelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/movies/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            navigate('/allmovie')
                            const remaining = movies.filter(movie => movie._id != _id)
                            setmovies(remaining)

                        }
                    })
            }
        });

    }

    const handlefavorite = () => {
        const favoritemovie = { ...movies, email: user.email }
        fetch('http://localhost:4000/favoritemovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(favoritemovie)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    })
                    navigate('/myfav')
                }

            })
    }


    return (
        <div>
            <Navbar />
            <section className='my-10'>
                <div className="card md:card-side bg-base-50 max-w-3xl mx-auto shadow-md space-x-6">
                    <figure>
                        <img src={poster} className='object-cover w-[320px] h-auto' alt="Movie" />
                    </figure>
                    <div className="text-left mt-5 my-auto">
                        <h2 className='text-lg font-bold'>{title}</h2>
                        <p className='font-medium'>{genre}</p>
                        <hr className='mt-3' />
                        <div className='py-4 space-y-1'>
                            <p className='text-sm'>Duration: {duration} min</p>
                            <p className='text-sm'>Releasing(Year): {releaseYear}</p>
                            <p className='text-sm'>Rating: {rating}</p>
                        </div>
                        <p className='text-gray-500'>{summary} </p>
                        <div className="mt-4 flex space-x-2">
                            <button onClick={() => handledelete(_id)}  className="flex items-center px-3 md:py-2 bg-red-500 text-white rounded-md"
                            > <AiFillDelete className="mr-2" />Delete Movie</button>
                            <button onClick={handlefavorite} className="flex items-center px-3 md:py-2 bg-teal-400 text-white rounded-md"
                            > <AiOutlineHeart className="mr-2" />Add to Favorite</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Moviedetails;