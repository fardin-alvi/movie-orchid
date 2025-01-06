import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import Swal from 'sweetalert2';

const Myfavorites = () => {
    const { user } = useContext(Authcontext);
    const data = useLoaderData();
    const [filterdata, setfilterdata] = useState([]);

    useEffect(() => {
        if (user && data) {
            const filtereddata = data.filter(item => item.email === user.email);
            setfilterdata(filtereddata);
        }
    }, [user, data]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-theta-rust.vercel.app/favoritemovie/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your movie has been deleted.", "success");
                            setfilterdata(filterdata.filter(movie => movie._id !== id));
                        }
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto my-8">
            <h2 className="text-3xl font-bold text-center my-4 text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                My Favorite Movies
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <table className="table w-full text-sm text-gray-700">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-left">
                            <th className="py-3 px-4 rounded-tl-lg">#</th>
                            <th className="py-3 px-4">Poster</th>
                            <th className="py-3 px-4">Title</th>
                            <th className="py-3 px-4">Genre</th>
                            <th className="py-3 px-4">Duration</th>
                            <th className="py-3 px-4">Release Year</th>
                            <th className="py-3 px-4">Rating</th>
                            <th className="py-3 px-4 rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {filterdata.length > 0 ? (
                            filterdata.map((fav, index) => (
                                <tr
                                    key={fav._id}
                                    className="hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4">
                                        <img
                                            src={fav.poster}
                                            alt={fav.title}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="py-3 px-4">{fav.title}</td>
                                    <td className="py-3 px-4">{fav.genre}</td>
                                    <td className="py-3 px-4">{fav.duration}</td>
                                    <td className="py-3 px-4">{fav.releaseYear}</td>
                                    <td className="py-3 px-4">{fav.rating}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            className="btn btn-error btn-sm px-4 py-2 rounded-md text-white shadow-md hover:shadow-lg"
                                            onClick={() => handleDelete(fav._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-4 text-gray-500">
                                    No favorite movies found!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myfavorites;
