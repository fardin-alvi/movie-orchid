import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Favoritemovie = ({ fav }) => {
    const navigate = useNavigate()
    const [favoritemovies, setfavoritemovies] = useState(fav)
    const { _id, poster, title, genre, duration, releaseYear, rating } = favoritemovies

    const handledelete = (_id,) => {
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
                fetch(`https://server-theta-rust.vercel.app/favoritemovie/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Movie has been deleted.",
                                icon: "success"
                            });
                            navigate('/allmovie')
                            const remaining = favoritemovies.filter(favorite => favorite._id != _id)
                            setfavoritemovies(remaining)

                        }
                    })
            }
        });

    }


    return (
        <div className=" flex flex-col rounded-md shadow-md bg-white overflow-hidden">
            <figure>
                <img src={poster} className='object-cover w-full h-[260px]' alt="Movie" />
            </figure>
            <div className="text-left my-auto items-center py-3 px-2">
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='font-medium'>{genre}</p>
                <hr className='mt-3' />
                <div className='pt-4 space-y-1'>
                    <p className='text-sm'>Duration: {duration} min</p>
                    <p className='text-sm'>Releasing(Year): {releaseYear}</p>
                    <p className='text-sm'>Rating: {rating}</p>
                </div>
                <div className='mt-5'>
                    <button onClick={() => handledelete(_id)} className="flex items-center text-sm px-3 py-2 md:py-1 bg-red-500 text-white rounded-md"
                    >Delete Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Favoritemovie;