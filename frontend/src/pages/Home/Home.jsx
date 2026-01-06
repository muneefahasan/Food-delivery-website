import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner/Banner';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';
import MenuSection from '../../components/MenuSection/MenuSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import AboutHome from '../../components/AboutHome/AboutHome';


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <SpecialOffer />
            <MenuSection />
            <Testimonials />
            <Footer />
            <AboutHome />

        </>
    )
}

export default Home;