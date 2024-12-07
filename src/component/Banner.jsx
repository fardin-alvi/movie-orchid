import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full h-[450px] object-cover">
            <div id="slide1" class="carousel-item relative w-full ">
                <img
                    src="/Images/banner_3.jpg"
                    class="w-full object-cover rounded-md" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-black opacity-20"></div>
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-100 w-fit md:w-5/12 mx-auto">
                    <p className="text-xl md:text-2xl font-bold">Your Movie Adventure Starts Here</p>
                    <p className="text-sm md:text-base mt-2">From timeless classics to the latest releases, our movie portal brings the best cinematic experiences to your screen. Discover, watch, and enjoy movies across a variety of genres at your convenience!</p>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img
                    src="/Images/banner7.jpg"
                    class="w-full object-cover rounded-md" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-black opacity-50"></div>
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-100 w-fit md:w-5/12 mx-auto">
                    <p className="text-xl md:text-2xl font-bold">Unlimited Entertainment with Access</p>
                    <p className="text-sm md:text-base mt-2">With our movie portal, enjoy unlimited access to top-rated films and trending releases. Stream your favorite titles in high quality, and discover new movies to enjoy with family and friends.!</p>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img
                    src="/Images/banner10.jpg"
                    class="w-full object-cover rounded-md" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-black opacity-50"></div>
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-100 w-fit md:w-5/12 mx-auto">
                    <p className="text-xl md:text-2xl font-bold">Discover Your Next Favorite Movie</p>
                    <p className="text-sm md:text-base mt-2">Explore a vast collection of movies from all genres, including action, drama, comedy, and more. Whether you're in the mood for a classic or the latest blockbuster, our platform has something for everyone.!</p>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img
                    src="/Images/banner8.jpg"
                    class="w-full object-cover rounded-md" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-black opacity-50"></div>
                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-100 w-fit md:w-5/12 mx-auto">
                    <p className="text-xl md:text-2xl font-bold"> Stream Movies Anytime, Anywhere</p>
                    <p className="text-sm md:text-base mt-2">Our platform lets you stream your favorite movies on any device, whenever you want. Whether you're at home or on the go, dive into a world of entertainment at the touch of a button.!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;