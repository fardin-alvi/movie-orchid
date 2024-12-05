import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import Favoritemovie from '../component/Favoritemovie';

const Myfavorites = () => {
    const data = useLoaderData()
    return (
        <div>
            <Navbar />
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8 '>
                {
                    data.map(fav => <Favoritemovie key={fav._id} fav={fav} />)
                }
            </section>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Myfavorites;