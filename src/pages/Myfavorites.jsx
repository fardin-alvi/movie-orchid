import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData } from 'react-router-dom';
import Favoritemovie from '../component/Favoritemovie';
import { Authcontext } from '../Provider/Authprovider';

const Myfavorites = () => {
    const { user } = useContext(Authcontext)
    const data = useLoaderData()
    const [filterdata,setfilterdata] = useState([])
    useEffect(() => {
        if (user && data) {
            const filtereddata = data.filter(item => item.email === user.email);
            setfilterdata(filtereddata);
        }
    }, [user, data]); 
    return (
        <div>
            <Navbar />
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-8 '>
                {
                    filterdata.map(fav => <Favoritemovie key={fav._id} fav={fav} />)
                }
            </section>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Myfavorites;