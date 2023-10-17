import React from 'react';

const Header = () => {
    return (
        <div>
                        <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/YXf5Rqq/3.png)' }}>
                <div className="hero-content text-left pl-96 text-neutral-content">
                    <div className="pl-48">
                        <h1 className="mb-5 text-3xl font-bold ">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button type="submit" className=" text-[#331A15] bg-[#D2B48C]   border-[#331A15] border-2 hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#331A15] font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Learn More</button>
                    </div>
                </div>
            </div>
            <section className='flex px-24 mx-auto gap-8 bg-[#ECEAE3]'>
                <div className='py-10'>
                    <img className='mb-4 w-12' src="https://i.ibb.co/MC3JWHT/1.png" alt="" />
                    <h2 className='text-2xl text-[#331A15] mb-2'>Awesome Aroma</h2>
                    <p className='text-[14px]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='py-10'>
                    <img className='mb-4 w-12' src="https://i.ibb.co/3S1xK0B/2.png" alt="" />
                    <h2 className='text-2xl text-[#331A15] mb-2'>High Quality</h2>
                    <p className='text-[14px]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='py-10'>
                    <img className='mb-4 w-12' src="https://i.ibb.co/8YsrT65/3.png" alt="" />
                    <h2 className='text-2xl text-[#331A15] mb-2'>Pure Grades</h2>
                    <p className='text-[14px]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='py-10'>
                    <img className='mb-4 w-12' src="https://i.ibb.co/YTw57W7/4.png" alt="" />
                    <h2 className='text-2xl text-[#331A15] mb-2'>Proper Roasting</h2>
                    <p className='text-[14px]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </section>
        </div>
    );
};

export default Header;