import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {
     const { createUser } = useContext(AuthContext);


     const handelSignUp = (event) => {
          event.preventDefault()
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          console.log(email, password);

          createUser(email, password)
               .then(result => {
                    console.log(result.user);
                    // user database send
                    const createdAt = result.user?.metadata?.creationTime
                    const user = { email, password, createdAt: createdAt };
                    fetch('http://localhost:5000/user', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(user)
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                              if (data.insertedId) {
                                   console.log('user data base add');
                                   from.reset()
                              }
                         })
               })
               .catch(error => {
                    console.log(error.message)
               })
     }
     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <p>New User</p>
                         <h1 className="text-5xl font-bold"> Register now!</h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelSignUp} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                   <label className="label">
                                        <p>Have an a account </p>
                                        <Link to={"/signIn"} className="font-bold text-green-500 hover:underline">Log In</Link>
                                   </label>

                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Register</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;