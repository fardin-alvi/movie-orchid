import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../Images/steam/filmzie.avif';
import img2 from '../Images/steam/youtube.avif';
import img3 from '../Images/steam/guidedoc.avif';
import img4 from '../Images/steam/hotstar (1).avif';
import img5 from '../Images/steam/hungamaplay.avif';
import img6 from '../Images/steam/itunes.avif';
import img7 from '../Images/steam/jiocinema.avif';
import img8 from '../Images/steam/netflix.avif';
import img9 from '../Images/steam/filmbox.avif';
import img10 from '../Images/steam/curiositystream.avif';
import img11 from '../Images/steam/appletvlionsgateplay.avif';
import img12 from '../Images/steam/amazonshorts.avif';
import img13 from '../Images/steam/amazonhoichoi.avif';

const SteamMovie = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center my-5 w-11/12 mx-auto">
            <p className="bg-gray-500 text-white px-4 py-2 text-center mb-3 md:mb-0 md:mr-5 text-sm md:text-base lg:text-lg lg:py-6">
                Steamed On
            </p>
            <div className="flex-1 overflow-hidden">
                <Marquee gradient={false} speed={50}>
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img1} alt="Filmzie" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img2} alt="YouTube" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img3} alt="GuideDoc" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img4} alt="Hotstar" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img5} alt="HungamaPlay" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img6} alt="iTunes" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img7} alt="JioCinema" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img8} alt="Netflix" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img9} alt="FilmBox" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img10} alt="CuriosityStream" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img11} alt="Apple TV Lionsgate" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img12} alt="Amazon Shorts" />
                    <img className="w-12 md:w-16 lg:w-20 mr-4" src={img13} alt="Amazon Hoichoi" />
                </Marquee>
            </div>
        </div>
    );
};

export default SteamMovie;
