

const Header = () => {


     return (
          <div >

               <div
                    className="hero h-[550px] "
                    style={{
                         backgroundImage: "url(https://i.postimg.cc/nM8M80Jy/6.jpg)",
                    }}>

                    <div className=" ">
                         <div className=" w-1/2 text-start">
                              <i className="mb-10  text-3xl font-bold">Would you like a Cup of Delicious Coffee?</i>
                              <p className="mb-5 mt-5">
                                   Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                              </p>
                              <button className="btn bg-[#E3B577] text-black hover:bg-[#dab687]">Learn More</button>
                         </div>
                    </div>
               </div>

               <div className="flex gap-8 mx-32 mt-10 bg-[#35332e] mb-10 rounded-xl p-14 ">
                    <div>
                         <img className="mb-4" src={'https://i.postimg.cc/cHSSN2gM/1.png'} alt="" />
                         <i className="text-2xl font-medium text-[#cf5239] ">Awesome Aroma</i>
                         <p className="text-base font-medium mt-4">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                         <img className="mb-4" src={'https://i.postimg.cc/cHSSN2gM/1.png'} alt="" />
                         <i className="text-2xl font-medium text-[#cf5239] ">High Quality</i>
                         <p className="text-base font-medium mt-4">You will We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                         <img className="mb-4" src={'https://i.postimg.cc/4y8kV38B/2.png'} alt="" />
                         <i className="text-2xl font-medium text-[#cf5239] ">Pure Grades</i>
                         <p className="text-base font-medium mt-4">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                         <img className="mb-4" src={'https://i.postimg.cc/MHZJnBYn/3.png'} alt="" />
                         <i className="text-2xl font-medium text-[#cf5239] ">Proper Roasting</i>
                         <p className="text-base font-medium mt-4">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

               </div>
          </div>
     );
};

export default Header;