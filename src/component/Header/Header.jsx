import { Link, NavLink } from "react-router-dom";

const Header = ()=>{
    return (
        <>
            <div className="flex justify-around p-3">
                <div className="logo ">
                    <h2 className=" text-2xl font-bold">your <span className="text-orange-600">logo</span></h2>
                </div>
                <div className="link">
                    <ul className="flex justify-between gap-2 items-center list-none ">
                        <li className="p-2"><NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}>Home</NavLink></li>
                        <li className="p-2"><NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}> About</NavLink></li>
                        <li className="p-2"><NavLink to="/contact" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}> Contact</NavLink></li>
                        <li className="p-2"><NavLink to="/github" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}> Github</NavLink></li>
                    </ul>
                </div>
                <div className="btns">
                    <button className="p-2 hover:bg-[#dadada] rounded-lg"><NavLink to="/login">Login</NavLink></button>
                    <button className="bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-lg ms-5">Get Started</button>
                </div>
            </div>
            <div className="w-screen h-0 border border-[#dadada]"></div>        
        </>
    )
}
export default Header;
