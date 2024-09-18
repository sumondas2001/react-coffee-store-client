import { Link } from "react-router-dom";


const ErrorPage = () => {
     return (
          <div className="text-center ">
               <div className="flex  h-[80vh]">
                    <img className="w-full" src={'/src/assets/images/404/404.gif'} alt="" />
               </div>
               <Link to={'/'}><button className="btn btn-success mt-10">Go Back</button></Link>
          </div>
     );
};

export default ErrorPage;