import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
     const { _id, name, chef, photo, price } = coffee;
     const handelDelete = (_id) => {
          console.log('delete', _id);
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then((result) => {
               if (result.isConfirmed) {


                    fetch(`http://localhost:5000/coffee/${_id}`, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data)
                              if (data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                   });
                                   const remaining = coffees.filter(cof => cof._id !== _id);
                                   setCoffees(remaining)
                              }
                         })
               }
          });

     }
     return (

          <div className="  bg-[#202020] shadow-xl rounded-xl mt-10">
               <div className="flex justify-between items-center px-10 py-4">
                    <div>
                         <figure>
                              <img
                                   src={photo}
                                   alt="Movie" />
                         </figure>
                    </div>
                    <div className="text-start">
                         <h2 className="text-xl font-bold mb-3">Name :  <span className="text-lg font-medium">{name}</span></h2>
                         <h2 className="text-xl font-bold mb-3">Chef : <span className="text-lg font-medium">{chef}</span></h2>
                         <h2 className="text-xl font-bold mb-3">Price : <span className="text-lg font-medium">{price}</span></h2>


                    </div>
                    <div className="flex flex-col gap-4">
                         <button className="text-3xl bg-amber-400 p-2 rounded-2xl text-black"><FaEye /></button>
                         <Link to={`/updateCoffee/${_id}`}>
                              <button className="text-3xl bg-blue-400 p-2 rounded-2xl text-black"><MdEdit /></button>
                         </Link>
                         <button onClick={() => handelDelete(_id)} className="text-3xl bg-red-600 p-2 rounded-2xl text-black"><MdDelete /></button>
                    </div>
               </div>
          </div>

     );
};

export default CoffeeCard;


CoffeeCard.propTypes = {
     coffee: PropTypes.object,
     coffees: PropTypes.object,


}