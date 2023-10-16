import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './component/CoffeeCard';

function App() {
const loadedCoffees=useLoaderData();
const[coffees,setCoffees] =useState(loadedCoffees)
console.log(coffees)
  return (
    <><div className=' bg-white'>
 <div className='grid grid-cols-2 gap-3 max-w-5xl mx-auto px-5 '>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees}
        setCoffees={setCoffees}></CoffeeCard>)
      }
     </div>
    </div>
    
    </>
  )
}

export default App
