import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-white'>
                <div className='max-w-3xl mx-auto pt-10 flex flex-col justify-center items-center'>
                    <Link to='/'> <button type="submit" className="flex items-center gap-2 justify-center text-[#374151] hover:bg-[#D2B48C]  bg-white focus:ring-4 focus:outline-none focus:ring-[#331A15] font-medium rounded-lg text-sm  px-5 py-2.5 text-center mb-10 "><BsArrowLeftShort></BsArrowLeftShort>Back to home</button></Link>
                    <div className='bg-[#F4F3F0] rounded-md text-center'>

                        <img src="https://i.ibb.co/vDn95Qf/404.gif" alt="" />


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;