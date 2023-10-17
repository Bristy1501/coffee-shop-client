import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

// const md5 = require('md5');

const SignUp = () => {
    const { signUp, loading } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signUp(email, password)
            .then(res => {
                // console.log(res);
                // const modifiedPassword=md5(password);
                const createdAt=res.user.metadata.createdAt;
                const creationTime=res.user.metadata.creationTime;
                const user = { email,createdAt,creationTime};
                console.log(res);
                fetch(' https://coffee-store-server-5ah3xlk1o-tamanna-zaman-bristys-projects.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{console.log(data);
                
                if(data.acknowledged){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }})
            })
            .catch(err => console.log(err))
    }
    return (
        <section className='bg-[#F3F3F3] py-4'>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto  lg:py-0">
                    <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-xl px-10 py-8 sm:p-16 mb-4">
                        <h1 className="text-xl font-semibold text-[#403F3F] md:text-3xl  text-center">
                            Register your account
                        </h1>
                        <hr className="my-6" />
                        <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-4 text-xl font-semibold text-[#403F3F] text-left">Your Name</label>
                                <input type="text" name="name" id="name" className="bg-[#F3F3F3] border-none text-[#9F9F9F] sm:text-sm rounded-lg block w-full p-5 " placeholder="Enter your name" required />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-4 text-xl font-semibold text-[#403F3F] text-left">Photo URL</label>
                                <input type="text" name="photo" id="photo" className="bg-[#F3F3F3] border-none text-[#9F9F9F] sm:text-sm rounded-lg block w-full p-5 " placeholder="Enter your photo url" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-4 text-xl font-semibold text-[#403F3F] text-left">Email address</label>
                                <input type="email" name="email" id="email" className="bg-[#F3F3F3] border-none text-[#9F9F9F]sm:text-sm rounded-lg block w-full p-5 " placeholder="Enter your email address" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-4 text-xl font-semibold text-[#403F3F] text-left">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] border-none p-5 text-[#9F9F9F] sm:text-sm rounded-lg block w-full  " required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className=" checkbox w-4 h-4 border border-[#CFCFCF] rounded-sm " required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className=" text-[#706F6F] ">Accept <a className="font-semibold text-[#706F6F] hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-[#403F3F] capitalize text-white text-xl  py-4 font-semibold  text-center rounded-lg">Register</button>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SignUp;