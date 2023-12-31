import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee)
        fetch(' https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
  <div className='bg-white'>
     <div className='max-w-4xl mx-auto pt-10 '>
      <Link to='/'> <button type="submit" className="flex items-center gap-2 justify-center text-[#374151] hover:bg-[#D2B48C]  bg-white focus:ring-4 focus:outline-none focus:ring-[#331A15] font-medium rounded-lg text-sm  px-5 py-2.5 text-center mb-10 "><BsArrowLeftShort></BsArrowLeftShort>Back to home</button></Link>
         <div className='bg-[#F4F3F0] rounded-md py-10'>
            
            <h2 className='text-center text-4xl text-[#374151] mb-6'>Add New Coffee</h2>
            <p className='text-center text-[14px] text-[#1B1A1AB2] px-28 mb-6'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

            <form className="mx-16" onSubmit={handleAddCoffee}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm  text-[#1B1A1ACC] font-semibold">Name</label>
                        <input type="text" id="name" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none " placeholder="Enter coffee name" required />
                    </div>
                    <div>
                        <label htmlFor="chef" className="block mb-2 text-sm text-[#1B1A1ACC] font-semibold">Chef</label>
                        <input type="text" id="chef" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="Enter coffee chef" required />
                    </div>
                    <div>
                        <label htmlFor="supplier" className="block mb-2 text-sm text-[#1B1A1ACC] font-semibold">Supplier</label>
                        <input type="text" id="supplier" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="Enter coffee supplier" required defaultValue={"Cappu Authorizer"} />
                    </div>
                    <div>
                        <label htmlFor="taste" className="block mb-2 text-sm text-[#1B1A1ACC] font-semibold">Taste</label>
                        <input type="text" id="taste" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="Enter coffee taste" defaultValue={"Sweet and hot" } required />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm text-[#1B1A1ACC] font-semibold">Category</label>
                        <input type="text" id="category" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="Enter coffee category" required defaultValue={"Americano"} />
                    </div>
                    <div>
                        <label htmlFor="details" className="block mb-2 text-sm text-[#1B1A1ACC] font-semibold">Details</label>
                        <input type="text" id="details" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="Enter coffee details" required defaultValue={"Espresso with hot water"} />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="photo" className="block mb-2 text-sm text-[#1B1A1ACC] font-semibold">Photo</label>
                    <input type="text" id="photo" className="bg-white border border-gray-300 text-black-900 text-sm rounded-lg hover:ring-[#E3B577]  hover:border-[#E3B577] hover:shadow-lg hover:border-2 focus:ring-[#E3B577]  focus:border-[#E3B577] focus:shadow-lg focus:border-2  block w-full p-2.5 placeholder:text-[#1B1A1A99] focus:outline-none" placeholder="Enter photo URL" required />
                </div>

                <button type="submit" className="w-full text-[#331A15] bg-[#D2B48C]   border-[#331A15] border-2 hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#331A15] font-medium rounded-lg text-sm  px-5 py-2.5 text-center  ">Add Coffee</button>


            </form>


        </div>
   </div>
  </div>
    );
};

export default AddCoffee;