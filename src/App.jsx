import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './component/CoffeeCard';
import Header from './component/Header';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  console.log(coffees)
  return (

    <>
      <Header></Header>
      <div className='bg-white flex flex-col items-center justify-center pt-20'>
        <p className="mb-5">--- Sip & Savor ---</p>
        <h1 className="mb-5 text-5xl font-bold text-[#331A15]">Our Popular Products</h1>
        <button type="submit" className="flex gap-2 items-center justify-center text-[#331A15] bg-[#D2B48C]   border-[#331A15] border-2 hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#331A15] font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Add Coffee <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="none">
          <path d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z" fill="#331A15" />
        </svg></button>
      </div>
      <div className=' bg-white pt-20'>

        <div className='grid grid-cols-2 gap-3 max-w-5xl mx-auto px-5 '>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees}
              setCoffees={setCoffees}></CoffeeCard>)
          }
        </div>
      </div>
      <div className='bg-white flex flex-col items-center justify-center pt-20'>
        <p className="">Follow Us Now</p>
        <h1 className="mb-5 text-5xl font-bold text-[#331A15]">Follow on Instagram</h1>
        <div className='grid grid-cols-4 gap-4 px-5 max-w-5xl mb-20'>
          <img src="https://i.ibb.co/88znSdx/Rectangle-9.png" alt="" />
          <img src="https://i.ibb.co/7W0jrHV/Rectangle-10.png" alt="" />
          <img src="https://i.ibb.co/4dwzfBv/Rectangle-11.png" alt="" />
          <img src="https://i.ibb.co/6g86qs9/Rectangle-12.png" alt="" />
          <img src="https://i.ibb.co/sbsht5C/Rectangle-13.png" alt="" />
          <img src="https://i.ibb.co/d6C0b9H/Rectangle-14.png" alt="" />
          <img src="https://i.ibb.co/wzBCbRD/Rectangle-15.png" alt="" />
          <img src="https://i.ibb.co/6t7n2T3/Rectangle-16.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default App
