import Navbar from '../component/Navbar';
import { useContext, useState } from "react";
import Footer from '../component/Footer';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { Authcontext } from '../Provider/Authprovider';
import { useNavigate } from 'react-router-dom';

const Addmovie = () => {
    const { user } = useContext(Authcontext)
    const [movie, setMovie] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const genres = ["Comedy", "Drama", "Horror", "Action", "Romance", "Tv Show"];
    const years = [2024, 2023, 2022, 2021, 2020];

    const handleInputChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (rating) => {
        setMovie({ ...movie, rating });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!movie.poster || !movie.poster.startsWith("http")) {
            newErrors.poster = "Movie poster must be a valid link.";
        }
        if (!movie.title || movie.title.length < 2) {
            newErrors.title = "Title must be at least 2 characters long.";
        }
        if (!movie.genre) {
            newErrors.genre = "Please select a genre.";
        }
        if (!movie.duration || movie.duration <= 60) {
            newErrors.duration = "Duration must be greater than 60 minutes.";
        }
        if (!movie.releaseYear) {
            newErrors.releaseYear = "Please select a release year.";
        }
        if (!movie.rating || movie.rating === 0) {
            newErrors.rating = "Please select a rating.";
        }
        if (!movie.summary || movie.summary.length < 10) {
            newErrors.summary = "Summary must be at least 10 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const usermovie = { ...movie, email: user.email };

            fetch('https://server-theta-rust.vercel.app/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usermovie)

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
                        e.target.reset()
                        navigate('/allmovie')

                    }

                })

        }
    };

    return (
        <div>
            <Navbar />
            <section>
                <div className="flex justify-center items-center md:min-h-screen my-10">
                    <div className="card bg-white shadow-xl p-6 w-full max-w-2xl rounded-lg">
                        <h2 className="text-2xl font-bold mb-6 text-center">Add Movie</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex items-center gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Movie Poster</label>
                                <input type="text" name="poster" className="input input-bordered w-full rounded-md px-4 py-2 border-gray-300 shadow-sm" placeholder="Enter image URL" value={movie.poster} onChange={handleInputChange}
                                />
                            </div>
                            {errors.poster && (
                                <p className="text-red-500 text-sm mt-1">{errors.poster}</p>
                            )}
                            <div className="flex items-center gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Movie Title</label>
                                <input type="text" name="title" className="input input-bordered w-full rounded-md px-4 py-2 border-gray-300 shadow-sm" placeholder="Enter movie title" value={movie.title} onChange={handleInputChange}
                                />
                            </div>
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                            )}
                            <div className="flex items-center gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Genre</label>
                                <select name="genre" className="select select-bordered w-full rounded-md px-4 py-2 border-gray-300 shadow-sm" value={movie.genre} onChange={handleInputChange}
                                >
                                    <option value="">Select genre</option>
                                    {genres.map((gen) => (
                                        <option key={gen} value={gen}>
                                            {gen}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.genre && (
                                <p className="text-red-500 text-sm mt-1">{errors.genre}</p>
                            )}

                            <div className="flex items-center gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Release Year</label>
                                <select name="releaseYear" className="select select-bordered w-full rounded-md px-4 py-2 border-gray-300 shadow-sm" value={movie.releaseYear} onChange={handleInputChange}
                                >
                                    <option value="">Select year</option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.releaseYear && (
                                <p className="text-red-500 text-sm mt-1">{errors.releaseYear}</p>
                            )}

                            <div className="flex items-center gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Duration</label>
                                <input type="number" name="duration" className="input input-bordered w-full rounded-md px-4 py-2 border-gray-300 shadow-sm" placeholder="Enter duration (minutes)" value={movie.duration} onChange={handleInputChange}
                                />
                            </div>
                            {errors.duration && (
                                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
                            )}

                            <div className="flex items-center gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Rating</label>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar key={star} size={24} className={`cursor-pointer ${movie.rating >= star ? 'text-yellow-500' : 'text-gray-400'
                                            }`} onClick={() => handleRatingChange(star)}
                                        />
                                    ))}
                                </div>
                            </div>
                            {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}

                            <div className="flex items-start gap-x-4">
                                <label className="w-32 text-sm font-bold text-gray-700">Summary</label>
                                <textarea name="summary" className="textarea textarea-bordered w-full rounded-md px-4 py-2 border-gray-300 shadow-sm" placeholder="Write a short summary" value={movie.summary} onChange={handleInputChange}
                                ></textarea>
                            </div>
                            {errors.summary && (
                                <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
                            )}

                            <div className="flex justify-center">
                                <button type="submit" className="btn px-6 py-3 bg-teal-500 text-white font-semibold rounded-md shadow-md"
                                >
                                    Add Movie
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Addmovie;