import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {
    const coffee = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo } = coffee
    return (
        <div className='max-w-3xl mx-auto bg-[#F5F4F1FF]'>
             <div className=" flex flex-row grow justify-center items-center mx-40 ">
            <figure className='grow'><img className='py-8 px-2' src={photo} alt="Movie" /></figure>
            <div>
                <h2 className='text-[#331A15] text-4xl mb-8'>Niceties</h2>
                <div className="flex flex-col grow">
                    <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Name: </span> {name}</p>
                    <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Chef: </span> {chef}</p>
                    <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Supplier: </span> {supplier}</p>
                    <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Taste: </span> {taste}</p>
                    <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Category: </span> {category}</p>
                    <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Details: </span> {details}</p>
                </div>
            </div>


        </div>
        </div>
       

    );
};

export default ViewCoffee;