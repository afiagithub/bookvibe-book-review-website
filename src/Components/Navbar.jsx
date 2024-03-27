import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar lg:w-[90%] mx-auto py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className={
                            ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                                "border-2 border-transparent p-3 rounded-lg"}>
                            Home</NavLink>
                        <NavLink to="/about" className={
                            ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                                "border-2 border-transparent p-3 rounded-lg"}>
                            About Us</NavLink>
                        <NavLink to="/books" className={
                            ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                                "border-2 border-transparent p-3 rounded-lg"}>Listed Books</NavLink>
                        <NavLink to="/pages" className={
                            ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                                "border-2 border-transparent p-3 rounded-lg"}>Pages to Read</NavLink>
                        <NavLink to="/pricing" className={
                            ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                                "border-2 border-transparent p-3 rounded-lg"}>Pricing</NavLink>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost font-extrabold text-2xl">Book Vibe</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4 items-center font-bold">
                    <NavLink to="/" className={
                        ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                            "border-2 border-transparent p-3 rounded-lg"}>
                        Home</NavLink>
                    <NavLink to="/about" className={
                        ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                            "border-2 border-transparent p-3 rounded-lg"}>
                        About Us</NavLink>
                    <NavLink to="/books" className={
                        ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                            "border-2 border-transparent p-3 rounded-lg"}>Listed Books</NavLink>
                    <NavLink to="/pages" className={
                        ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                            "border-2 border-transparent p-3 rounded-lg"}>Pages to Read</NavLink>
                    <NavLink to="/pricing" className={
                            ({ isActive }) => isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] p-3 rounded-lg" :
                                "border-2 border-transparent p-3 rounded-lg"}>Pricing</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a className="btn bg-[#23BE0A] text-white font-semibold px-6 border-2 border-[#23BE0A] 
                hover:text-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A]">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white font-semibold px-6 border-2 border-[#59C6D2] 
                hover:text-[#59C6D2] hover:bg-transparent hover:border-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;