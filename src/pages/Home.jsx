import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <>
            <nav>
                <Navbar />
                <Banner/>
            </nav>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Home;