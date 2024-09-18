import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
     const loadedUser = useLoaderData();
     const [user, setUser] = useState(loadedUser);

     const handelDelete = (id) => {
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
                    fetch(`https://react-coffee-store-server.vercel.app/user/${id}`, {
                         method: 'DELETE',

                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data)
                              if (data.deletedCount > 0) {
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your User has been deleted.",
                                        icon: "success"
                                   });

                                   const remaining = user.filter(user => user._id !== id);
                                   setUser(remaining)
                              }
                         })

                    //
               }
          });
     }
     return (
          <div className="h-screen mt-10">
               <h1 className="text-center mb-6 text-2xl font-semibold underline">Users </h1>


               <div className="overflow-x-auto ">
                    <table className="table bg-slate-900">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Email</th>
                                   <th>CreatedAt</th>
                                   <th>Last Logged In</th>
                                   <th>Password</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {/* row 1 */}
                              {
                                   user.map((user, index) => <tr key={user._id}
                                        className="bg-base-200">
                                        <th>{index}</th>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.lastSignInTime}</td>

                                        <td>{user.password}</td>
                                        <td>
                                             <button
                                                  onClick={() => handelDelete(user._id)}
                                                  className="btn font-bold">X</button>
                                        </td>
                                   </tr>)
                              }

                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Users;