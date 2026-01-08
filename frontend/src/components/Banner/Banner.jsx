import React, { useState } from 'react';
import { FaSearch, FaDownload, FaPlay, FaTimes } from 'react-icons/fa';
import { bannerAssets } from '../../assets/dummydata';

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showVideo, setShowVideo] = useState(false);

    const { bannerImage, orbitImages, video } = bannerAssets;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    }

    return (
        <div className='relative'>
            <div className='bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 px-4 sm:px-8 relative overflow-hidden'>

                <div className='absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-700/10' />

                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center md:text-left'>

                    {/*LEFT CONTENT*/}
                    <div className='flex-1 space-y-8 relative md:pr-8 lg:pr-16 text-center md:text-left z-10'>
                        <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md'>
                            We are here <br />
                            <span className='text-purple-400 bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent'>
                                For Food & Delivery
                            </span>
                        </h1>

                        <p className='text-lg md:text-lg lg:text-xl font-playfair italic sm:text-xl text-purple-100 max-w-xl opacity-90 mx-auto md:mx-0'>
                            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
                        </p>

                        <form onSubmit={handleSearch} className='relative max-w-2xl mx-auto md:mx-0 group'>
                            <div className='relative flex items-center bg-gray-800/30 rounded-xl border-2 border-purple-500 shadow-2xl hover:bg-purple-900/50 transition-all duration-300'>
                                <div className='pl-6 pr-3 py-4'>
                                    <FaSearch className='text-xl text-purple-400/80' />
                                </div>

                                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder='Discover your next favorite meal...'
                                    className='w-full py-4 pr-6 bg-transparent outline-none placeholder-purple-200/50 text-lg font-medium tracking-wide text-white' />
                                <button type='submit' className='mr-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold text-white hover:from-purple-400 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/20'>
                                    Search
                                </button>
                            </div>
                        </form>

                        <div className='flex flex-wrap gap-4 justify-center md:justify-start mt-6'>
                            <button className='group flex items-center gap-3 bg-gray-800/30 hover:bg-gray-800/50 px-6
                                py-3 rounded-xl transition-all duration-300 border-2 border-purple-700/50 hover:border-purple-400'>
                                <FaDownload className='text-xl text-purple-400 group-hover:animate-bounce' />
                                <span className='text-lg'>Download App</span>
                            </button>
                            <button onClick={() => setShowVideo(true)} className='group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500
                                hover:from-purple-400 hover:to-indigo-400 px-6 py-3 rounded-xl transition-all duration-300 shadow hover:shadow-purple-500/30'>
                                <FaPlay className='text-xl text-white' />
                                <span className='text-lg text-white font-semibold'>Watch Video</span>
                            </button>
                        </div>

                    </div>

                    {/*RIGHT IMAGES CONTAINER WITH ORBITAL IMAGES*/}
                    <div className='flex-1 relative group mt-8 md:mt-0 min-h-[300px] sm:min-h-[400px] flex items-center justify-center'>
                        {/* MAIN IMAGE*/}
                        <div className='relative rounded-full p-1 bg-gradient-to-br from-purple-700 via-indigo-800 to-purple-400 shadow-2xl z-20 w-[250px] xs:w-[300px] sm:w-[350px] h-[250px] xs:h-[300px] sm:h-[350px]'>
                            <img src={bannerImage} alt="Banner" className='rounded-full border-4 xs:border-8 border-gray-900 w-full h-full object-cover object-center' />
                            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-purple-900/40 mix-blend-multiply' />
                        </div>

                        {/*ORBITAL IMAGES*/}
                        {orbitImages && orbitImages.map((imageSrc, index) => (
                            <div key={index} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                ${index === 0 ? 'orbit' : `orbit-delay-${index * 5}`}
                                w-[80px] xs:w-[100px] sm:w-[150px] h-[80px] xs:h-[100px] sm:h-[150px] pointer-events-none`}>
                                <img src={imageSrc} alt={`Orbiting ${index + 1}`} className='rounded-full w-full h-full border border-purple-500/30 shadow-lg bg-gray-900 object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*VIDEO MODAL*/}
            {showVideo && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
                    <div className='bg-gray-900 rounded-lg overflow-hidden w-full max-w-4xl relative'>
                        <button onClick={() => setShowVideo(false)}
                            className='absolute top-4 right-4 text-purple-400 hover:text-purple-300 text-3xl z-10 transition-all'>
                            <FaTimes />
                        </button>
                        <div className='w-full'>
                            <video controls autoPlay className='w-full aspect-video object-contain rounded-lg shadow-2xl'>
                                <source src={video} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner;