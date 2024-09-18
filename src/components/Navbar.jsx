import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

     const navlink = <>
          <li><NavLink to={'/'}>HOME</NavLink></li>
          <li><NavLink to={'/users'}>Users</NavLink></li>
          <li><NavLink to={'/addCoffee'}>Add Coffee</NavLink></li >

     </>


     return (
          <div>
               <div className=" h-25"
                    style={{
                         backgroundImage: "url(https://i.postimg.cc/tgVqbFry/15.jpg)",
                    }}>
                    <div className="flex justify-center   items-center  gap-4">

                         <img className="size-20 m-3  " src={'https://i.postimg.cc/K8HpXyBw/logo1.png'} alt="" />
                         <i className="text-3xl font-semibold">Espresso Emporium</i>

                    </div>
               </div>

               <div className="navbar bg-[#69423b] mt-6 mb-6">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold">
                                   {navlink}
                              </ul>
                         </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">

                         <ul className="menu menu-horizontal px-1 font-bold">

                              {navlink}


                         </ul>
                    </div>
                    <div className="navbar-end">

                         <Link to={'/signUp'}> <button className="btn btn-accent mr-10 font-bold">Sign Up</button></Link>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;