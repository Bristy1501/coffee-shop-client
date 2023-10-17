import { BiSolidPhone } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
    return (
        <div className="py-10 px-20 bg-base-200 text-base-content">
            <div  className="max-w-5xl mx-auto flex flex-col ">
            <img className='w-16 mb-5' src="https://i.ibb.co/0jrdCnW/logo1.png" alt="" />
            <div className="grid grid-cols-2 mt-7 ">
                <div>
                    <h1 className="mb-7 text-4xl font-bold text-[#331A15]">Espresso Emporium</h1>
                    <p className="mb-7">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex mb-7">
                        <button className="rounded-full text-4xl p-2"><SiFacebook className='text-[#331A15]'></SiFacebook> </button>
                        <button className="rounded-full text-4xl p-2"><BsTwitter className='text-[#331A15]'></BsTwitter> </button>
                        <button className="rounded-full text-4xl p-2"><BsInstagram className='text-[#331A15]'></BsInstagram> </button>
                        <button className="rounded-full text-4xl p-2"><BsLinkedin className='text-[#331A15]'></BsLinkedin> </button>

                    </div>
                    <h1 className="mb-5 text-4xl font-bold text-[#331A15]">Get in Touch</h1>
                    <div>
                        <div className="flex items-center justify-start"> <button className="rounded-full text-xl p-2"><BiSolidPhone className='text-[#331A15]'></BiSolidPhone>
                        </button> <p className='text-[#331A15]'>+88 01533 333 333</p>

                        </div>
                        <div className="flex items-center justify-start"> <button className="rounded-full text-xl p-2"><HiEnvelope className='text-[#331A15]'></HiEnvelope> </button><p className='text-[#331A15]'>info@gmail.com</p> </div>
                        <div className="flex items-center justify-start"><button className="rounded-full text-xl p-2"><HiLocationMarker className='text-[#331A15]'></HiLocationMarker> </button><p className='text-[#331A15]'>72, Wall street, King Road, Dhaka</p> </div>
                    </div>

                </div>
                <div>
                    <section className='bg-[##F3F3F3] '>
                        <div className="">
                            <div className="flex flex-col items-center justify-center px-6  mx-auto  lg:py-0">
                                <div className="w-full  rounded-lg  md:mt-0 sm:max-w-xl px-10  mb-4">
                                    <h1 className="mb-5 text-4xl font-bold text-[#331A15]">Connect with Us</h1>
                                    <hr className="my-6" />
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>

                                            <input type="text" id="name" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none " placeholder="Name" required />
                                        </div>
                                        <div>

                                            <input type="email" id="email" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none " placeholder="Email" required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <textarea id="message" rows="4" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="message"></textarea>
                                        </div>
                                        <button type="submit" className=" text-[#331A15] bg-[#D2B48C]   border-[#331A15] border-2 hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#331A15] font-medium rounded-full text-sm  px-5 py-2.5 text-center">Send Message</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </div>
            </div>
           
        </div>

    );
};

export default Footer;