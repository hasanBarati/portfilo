import {MdArrowRightAlt} from "react-icons/md";
import HeraoImage from '../assets/heroImage.png'
export const Home=()=>{
    return(
        <div name="home" className="md:h-screen w-full bg-gradient-to-b pb-20 from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="pt-40  flex flex-col justify-center h-full">
                    <h2 className=" text-4xl sm:text-7xl font-bold text-white">
                        i am a front-end developer
                    </h2>
                    <p className="text-gray-500 max-w-md py-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    </p>


                    <div>
                        <button className="group text-white w-fit py-3 px-6 my-3 flex items-center bg-teal-300 rounded-md ">
                            Portfilo
                            <span className="group-hover:rotate-90 duration-300">
                            <MdArrowRightAlt size={25} className="ml-1"/>
                        </span>
                        </button>
                    </div>
                </div>
                 <div className='pt-40'>
                     <img src={HeraoImage} className="rounded-2xl mx-auto w-2/3 md:w-full" alt="myportfilo image"  />
                 </div>
            </div>
        </div>
    )
}