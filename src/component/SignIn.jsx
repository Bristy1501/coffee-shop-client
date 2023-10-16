import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignIn = () => {
    const { signIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const user = { email: result.user.email, lastLoggedAt: result.user?.metadata?.lastSignInTime }
                console.log(user)
              



                fetch(' https://coffee-store-server-99fwrlmdg-tamanna-zaman-bristys-projects.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            })
            .catch(err => console.log(err.message))

    }
    return (
        <section className='bg-[##F3F3F3] py-4'>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto  lg:py-0">
                    <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-xl px-10 py-8 sm:p-16 mb-4">
                        <h1 className="text-xl font-semibold text-[#403F3F] md:text-3xl  text-center">
                            Login your account
                        </h1>
                        <hr className="my-6" />
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-4 text-xl font-semibold text-[#403F3F] text-left">Email address</label>
                                <input type="email" name="email" id="email" className="bg-[#F3F3F3] border-none text-[#9F9F9F]sm:text-sm rounded-lg block w-full p-5 " placeholder="Enter your email address" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-4 text-xl font-semibold text-[#403F3F] text-left">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#F3F3F3] border-none p-5 text-[#9F9F9F] sm:text-sm rounded-lg block w-full" autoComplete="on" required />
                            </div>
                            <button type="submit" className="w-full bg-[#403F3F] capitalize text-white text-xl  py-4 font-semibold  text-center rounded-lg">Login</button>
                            <p className="font-semibold text-[#706F6F] text-center ">
                                Don’t Have An Account ?  <Link to="/register" className="font-semibold text-[#f85f5e]">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SignIn;