import React, { useState } from 'react';
import { BiSolidPencil } from "react-icons/bi";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Users = () => {
    const users = useLoaderData()
    // console.log(users)
    // const{email,createdAt,creationTime}=user
    const [count, setCount] = useState(1) 
    const [remainingUsers, setRemainingUsers] = useState(users) 

    const handleDelete = id => {
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
console.log(` https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app/users/${id}`)
                fetch(` https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res =>res.json())
                    .then(data=>{
                        if(data.deletedCount>0)
                        {
                            console.log(data)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining=(users.filter(user=>user._id!=id))
                            setRemainingUsers(remaining)
                        }
                    })

                
            }
        })
    }
    return (
        <div>
            user: {users.length}
            Ruser: {remainingUsers.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Creation Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remainingUsers.map(user =>
                                <tr key={user._id}>
                                    {/* <td>{count}{setCount(count+1)}</td> */}
                                    <td>{count}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.createdAt}</td>
                                    <td>{user?.creationTime}</td>
                                    <td>
                                        <div className="flex flex-row  gap-2 mx-4">
                                            <Link ><button className="rounded bg-[#D2B48C] p-2"><BsFillEyeFill className='text-white'></BsFillEyeFill></button></Link>
                                            <Link ><button className="rounded bg-[#3C393B] p-2"><BiSolidPencil className='text-white'></BiSolidPencil></button></Link>
                                            <button onClick={() => handleDelete(user._id)} className="rounded bg-[#EA4744] p-2"><RiDeleteBin7Fill className='text-white'></RiDeleteBin7Fill></button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;