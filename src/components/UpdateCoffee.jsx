import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
     const coffee = useLoaderData();
     const { _id, name, chef, supplier, taste, category, details, photo, price } = coffee;

     const handelUpdateCoffee = event => {
          event.preventDefault();
          const from = event.target;

          const name = from.name.value;
          const chef = from.chef.value;
          const supplier = from.supplier.value;
          const taste = from.taste.value;
          const category = from.category.value;
          const details = from.details.value;
          const photo = from.photo.value;
          const price = from.price.value;


          const updateCoffee = { name, chef, supplier, taste, category, details, photo, price };

          fetch(`https://react-coffee-store-server.vercel.app/coffee/${_id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(updateCoffee)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                         Swal.fire({
                              title: "Successfully",
                              text: " Coffee Update",
                              icon: "success"
                         });
                    }
               })

          console.log(updateCoffee)

     }
     return (
          <div>
               <div className="px-52 mt-10">
                    <Link to={'/'}>
                         <button className="btn   bg-[#e2b67d] text-xl hover:bg-[#D2B48C] text-black font-bold"><i>Back To Home</i></button>
                    </Link>

               </div>
               <div className="max-w-7xl  mx-auto flex text-center  mt-10 px-20 bg-slate-800 py-10 mb-20 rounded-lg" >


                    <div>
                         <i className="text-3xl font-extrabold  text-[#D2B48C]">Update Coffee</i>
                         <p className="text-lg mt-6 ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                         <form onSubmit={handelUpdateCoffee} className="mt-10">
                              <div className="flex mb-8  ">
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" defaultValue={name} placeholder="Enter coffee name" name="name" className="input input-bordered mr-6" required />
                                   </div>
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text">Chef</span>
                                        </label>
                                        <input type="text" defaultValue={chef} placeholder="Enter coffee chef" name="chef" className="input input-bordered" required />
                                   </div>
                              </div>
                              <div className="flex mb-8  ">
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text">Supplier</span>
                                        </label>
                                        <input type="text" defaultValue={supplier} placeholder="Enter coffee supplier" name="supplier" className="input input-bordered mr-6" required />
                                   </div>
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text">Taste</span>
                                        </label>
                                        <input type="text" defaultValue={taste} placeholder="Enter coffee Taste" name="taste" className="input input-bordered" required />
                                   </div>
                              </div>
                              <div className="flex mb-8 ">
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" defaultValue={category} placeholder="Enter coffee Category" name="category" className="input input-bordered mr-6" required />
                                   </div>
                                   <div className="form-control md:w-1/2">
                                        <label className="label">
                                             <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" defaultValue={details} placeholder="Enter coffee Details" name="details" className="input input-bordered" required />
                                   </div>

                              </div>
                              <div className=" flex mb-8 ">
                                   <div className="form-control w-1/2">
                                        <label className="label">
                                             <span className="label-text">Photo</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Enter photo URL" defaultValue={photo} className="input input-bordered mr-6" required />
                                   </div>
                                   <div className="form-control w-1/2">
                                        <label className="label">
                                             <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Enter Coffee Price" defaultValue={price} className="input input-bordered mr-6" required />
                                   </div>


                              </div>
                              <input className="w-full text-black text-base hover:text-white font-bold btn bg-[#D2B48C] mb-10" type="submit" value="Update  Coffee" />
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default UpdateCoffee;