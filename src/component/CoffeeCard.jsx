import React from 'react';
import { BiSolidPencil } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee
    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'Delete',
                    header: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (

        <div className="flex flex-row grow justify-center items-center bg-[#F5F4F1FF]">
            <figure className='grow'><img className='py-8 px-2' src={photo} alt="Movie" /></figure>
            <div className="flex flex-col grow">
                <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Name: </span> {name}</p>
                <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Chef: </span> {chef}</p>
                <p className='text-[14px]'><span className='font-semibold  text-[#1B1A1A]'> Price:</span> 890 Taka</p>

            </div>
            <div className="flex flex-col  gap-2 mx-4">
                <Link to={`/coffee/${_id}`}><button className="rounded bg-[#D2B48C] p-2"><BsFillEyeFill className='text-white'></BsFillEyeFill> </button></Link>
                <Link to={`/updateCoffee/${_id}`}><button className="rounded bg-[#3C393B] p-2"><BiSolidPencil className='text-white'></BiSolidPencil> </button></Link>
                <button onClick={() => handleDelete(_id)} className="rounded bg-[#EA4744] p-2"><RiDeleteBin7Fill className='text-white'></RiDeleteBin7Fill> </button>

            </div>
        </div>

    );
};

export default CoffeeCard;