import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Swal from "sweetalert2"; // For feedback messages

const PartnerSubscription = () => {
    const partners = [
        "https://i.ibb.co.com/VxdHv7C/1.png",
        "https://i.ibb.co.com/MCPNQCN/2.png",
        "https://i.ibb.co.com/jyL6RZr/3.png",
        "https://i.ibb.co.com/D9TSSrT/p4.png",
        "https://i.ibb.co.com/MCPNQCN/2.png",
        "https://i.ibb.co.com/VxdHv7C/1.png",
    ];

    const [email, setEmail] = useState("");

    const handleSubscription = async (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire({
                title: "Error",
                text: "Please enter a valid email address!",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }
        try {
            const response = await fetch("http://localhost:4000/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    title: "Success",
                    text: "Subscription successful! You'll receive updates soon.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
                setEmail("");
            } else {
                Swal.fire({
                    title: "Error",
                    text: data.message || "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Unable to subscribe. Please try again later.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div>
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold dark:text-white text-center text-gray-800">
                    OUR PARTNER'S
                </h1>
                <div className="relative mt-8 w-11/12 mx-auto">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={partner}
                                        alt={`Partner ${index + 1}`}
                                        className="w-48 h-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="bg-gradient-to-r from-teal-300 to-indigo-500 bg-opacity-30 p-8 flex flex-col gap-y-2 md:flex-row items-center justify-center text-white text-center">
                <h2 className="text-2xl w-full font-semibold">
                    GET UPDATES - SIGN UP NOW!
                </h2>
                <form className="flex justify-center w-full" onSubmit={handleSubscription}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 rounded-l-md focus:outline-none w-1/3 text-gray-800"
                    />
                    <button
                        type="submit"
                        className="bg-white text-purple-500 px-4 rounded-r-md hover:bg-gray-100"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PartnerSubscription;
