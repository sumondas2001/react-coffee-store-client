import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const SignIn = () => {
     const { signInUser } = useContext(AuthContext)
     const handelSignIn = (event) => {
          event.preventDefault()
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          console.log(email, password);
          signInUser(email, password)
               .then(result => {
                    console.log(result.user);
                    const user = {
                         email,
                         lastSignInTime: result.user?.metadata?.lastSignInTime

                    }
                    fetch('https://react-coffee-store-server.vercel.app/user', {
                         method: 'PATCH',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(user)

                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data)
                              from.reset()
                         })

               })
               .catch(error => {
                    console.log(error)
               })
     }

     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Log In now!</h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelSignIn} className="card-body">
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
                                        <Link to={"/signUp"} className="font-bold text-green-500 hover:underline">Register</Link>

                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Log In</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default SignIn;