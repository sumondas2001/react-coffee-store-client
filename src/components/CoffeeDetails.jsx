import { Link, useLoaderData } from "react-router-dom";



const CoffeeDetails = () => {
     const data = useLoaderData();


     const { name, chef, supplier, taste, photo, price, details, category } = data;
     // console.log(data)




     return (
          <div>
               <Link to={'/'}> <button className="btn btn-success ml-32 mt-4">Go back</button></Link>
               <h1 className="text-3xl font-bold text-center mt-1 text-yellow-600">Coffee Details</h1>
               <div className=" bg-slate-900  flex items-center m-10 gap-10 p-20 w-[700px] mx-auto rounded-lg">
                    <div>
                         <img src={photo} alt="" />
                    </div>
                    <div className="text-start ">
                         <h1 className="text-xl  font-bold mb-1">Name :  <span className="text-lg font-normal">{name}</span></h1>
                         <h1 className="text-xl font-bold mb-1">chef: <span className="text-lg font-normal  ">{chef}</span></h1>
                         <h1 className="text-xl font-bold mb-1">supplier: <span className="text-lg   font-normal">{supplier}</span></h1>
                         <h1 className="text-xl font-bold mb-1">taste: <span className="text-lg font-normal">{taste}</span></h1>
                         <h1 className="text-xl font-bold mb-1">price: <span className="text-lg font-normal">{price}</span></h1>
                         <h1 className="text-xl font-bold mb-1">details: <span className="text-lg font-normal">{details}</span></h1>
                         <h1 className="text-xl font-bold mb-1">category: <span className="text-lg font-normal">{category}</span></h1>

                    </div>
               </div>
          </div>
     );
};

export default CoffeeDetails;