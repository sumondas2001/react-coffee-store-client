import { Link, useLoaderData } from "react-router-dom";

import Header from "./Header";
import CoffeeCard from "./CoffeeCard";
import CoffeeFollow from "./CoffeeFollow";
import { useState } from "react";


const Home = () => {
     const allCoffee = useLoaderData();
     const [coffees, setCoffees] = useState(allCoffee)
     // console.log(allCoffee)
     return (
          <div>
               <Header></Header>
               <div className="text-center mt-4">
                    <p className="mb-4 text-lg">--- Sip & Savor ---</p>
                    <i className="text-4xl font-bold text-[#331A15]">Our Popular Products</i>
                    <div>
                         <Link to={'/addCoffee'}>
                              <button className="btn mt-6 text-lg bg-[#cc9d60] text-black">Add Coffee</button>
                         </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-10 mx-20">
                         {
                              coffees.map(coffee => <CoffeeCard
                                   key={coffee._id}
                                   coffee={coffee}
                                   coffees={coffees}
                                   setCoffees={setCoffees}
                              >

                              </CoffeeCard>)
                         }
                    </div>
               </div>
               <CoffeeFollow></CoffeeFollow>
          </div>
     );
};

export default Home;