import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Favoritemovie = ({ fav }) => {
    const [favoritemovies, setfavoritemovies] = useState(fav)
    const { _id, poster, title, genre, duration, releaseYear, rating } = fav

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
                fetch(`http://localhost:4000/favoritemovie/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This movie has been deleted.",
                                icon: "success"
                            });
                            navigate('/allmovie')
                            const remaining = favoritemovies.filter(favmovie => favmovie._id != _id)
                            setfavoritemovies(remaining)

                        }
                    })
            }
        });

    }


    return (
        <div className="card card-side bg-base-50 shadow-md space-x-6">
            <figure>
                <img src={poster} className='object-cover w-[260px] h-[260px]' alt="Movie" />
            </figure>
            <div className="text-left my-auto">
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='font-medium'>{genre}</p>
                <hr className='mt-3' />
                <div className='pt-4 space-y-1'>
                    <p className='text-sm'>Duration: {duration} min</p>
                    <p className='text-sm'>Releasing(Year): {releaseYear}</p>
                    <p className='text-sm'>Rating: {rating}</p>
                </div>
                <div className='mt-5'> 
                    <button onClick={() => handledelete(_id)} className="flex items-center text-sm px-3 md:py-1 bg-red-500 text-white rounded-md"
                    >Delete Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Favoritemovie;