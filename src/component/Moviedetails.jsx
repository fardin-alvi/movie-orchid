import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AiFillDelete, AiOutlineHeart } from 'react-icons/ai';
import { FaEdit, FaStar, FaStarHalfAlt, FaPlay } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import Swal from 'sweetalert2';
import { Authcontext } from '../Provider/Authprovider';
import { LuCalendarClock } from "react-icons/lu";

const Moviedetails = () => {
    const loadedmovie = useLoaderData();
    const [movies, setmovies] = useState(loadedmovie);
    const navigate = useNavigate();
    const { user } = useContext(Authcontext);
    const { _id, poster, title, genre, duration, releaseYear, rating, summary, youtubeLink } = loadedmovie;

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
                                text: "Your Movie has been deleted.",
                                icon: "success"
                            });
                            navigate('/allmovie');
                            const remaining = movies.filter(movie => movie._id !== _id);
                            setmovies(remaining);
                        }
                    })
            }
        });
    }

    const handlefavorite = () => {
        const favoritemovie = { ...movies, email: user.email };
        fetch('http://localhost:4000/favoritemovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(favoritemovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    })
                    navigate('/myfav');
                }
            })
    }

    const renderRatingStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;

        let stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < filledStars) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i < filledStars + halfStars) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };

    return (
        <div className="bg-base-200 py-10">
            <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="relative md:w-[50%]">
                    <img
                        src={poster}
                        alt={title}
                        className="w-full md:h-svh object-cover rounded-lg shadow-lg"
                    />
                    <a
                        href='https://www.youtube.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 rounded-lg"
                    >
                        <div className="relative text-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-ping rounded-full border-4 px-10 border-teal-600 w-20 h-20"></div>
                            </div>
                            <FaPlay className="text-white text-5xl animate-pulse" />
                        </div>
                    </a>
                </div>
                <div className="md:w-[50%] space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="text-sm font-medium text-gray-600">{genre}</p>
                    <hr />
                    <p className="text-gray-600">{summary}</p>
                    <div className="flex flex-col gap-1">
                        <p className='text-lg text-left mb-2'>Specification</p>
                        <p className="flex items-center gap-2 text-gray-600">
                            <MdAvTimer /> {duration} min
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                            <LuCalendarClock /> {releaseYear}
                        </p>
                        <div className="flex items-center space-x-2">
                            {renderRatingStars(rating)}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => handledelete(_id)}
                            className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md"
                        >
                            <AiFillDelete className="mr-2" /> Delete
                        </button>
                        <button
                            onClick={handlefavorite}
                            className="flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-md"
                        >
                            <AiOutlineHeart className="mr-2" /> Add to Favorite
                        </button>
                        <Link
                            to={`/updatemovie/${_id}`}
                            className="flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-md"
                        >
                            <FaEdit className="mr-2" /> Update
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Moviedetails;
