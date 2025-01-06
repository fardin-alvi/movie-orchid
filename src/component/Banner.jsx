import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import bannerone from "../Images/banner_3.jpg";
import bannertwo from "../Images/banner7.jpg";
import bannerthree from "../Images/banner10.jpg";
import bannerfour from "../Images/banner8.jpg";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
    const banners = [
        {
            id: 1,
            image: bannerone,
            title: "Your Movie Adventure Starts Here",
            description:
                "From timeless classics to the latest releases, our movie portal brings the best cinematic experiences to your screen.",
        },
        {
            id: 2,
            image: bannertwo,
            title: "Unlimited Entertainment with Access",
            description:
                "Enjoy unlimited access to top-rated films and trending releases. Discover new movies to enjoy with family and friends.",
        },
        {
            id: 3,
            image: bannerthree,
            title: "Discover Your Next Favorite Movie",
            description:
                "Explore a vast collection of movies from all genres, including action, drama, comedy, and more.",
        },
        {
            id: 4,
            image: bannerfour,
            title: "Stream Movies Anytime, Anywhere",
            description:
                "Our platform lets you stream your favorite movies on any device, whenever you want.",
        },
    ];

    return (
        <div className="flex justify-center">
            <Swiper
                modules={[Pagination, Autoplay]} // Removed Navigation module
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className="w-11/12 rounded-md overflow-hidden"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative h-[450px]">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-black opacity-30"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-100 w-fit md:w-5/12 mx-auto">
                                <p className="text-xl md:text-2xl font-bold">{banner.title}</p>
                                <p className="text-sm md:text-base mt-2">{banner.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
