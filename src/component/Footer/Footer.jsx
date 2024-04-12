import { NavLink } from "react-router-dom";

const Footer = () =>{
    return (
        <>
            <div className="w-screen h-0 border border-[#dadada]"></div> 
            <div className="grid grid-cols-2 gap-2 items-center justify-items-center">
                <div  className=" text-4xl font-bold h-fit">
                    <h2>your <span className="text-orange-600">logo</span></h2>
                </div>
                <div className="grid grid-cols-3 gap-20 p-5">
                    <ul>
                        <li className="font-bold mb-3">Resources</li>
                        <li className="text-slate-600 font-bold opacity-65"> <NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}>Home</NavLink></li>
                        <li className="text-slate-600 font-bold opacity-65"><NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}> About</NavLink></li>
                        <li className="text-slate-600 font-bold opacity-65"><NavLink to="/contact" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}> Contact</NavLink></li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-3">Follow Us</li>
                        <li className="text-slate-600 font-bold opacity-65">Instagram</li>
                        <li className="text-slate-600 font-bold opacity-65">Discord</li>
                        <li className="text-slate-600 font-bold opacity-65"><NavLink to="/github" className={({isActive})=>`${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700`}> Github</NavLink></li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-3">Legal</li>
                        <li className="text-slate-600 font-bold opacity-65">Privacy Policy</li>
                        <li className="text-slate-600 font-bold opacity-65">Termas and Condition</li>
                        <li className="text-slate-600 font-bold opacity-65">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;

