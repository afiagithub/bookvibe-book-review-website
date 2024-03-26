import { NavLink } from "react-router-dom";
import bannerImg from "../../public/book.png"
const Banner = () => {
    return (
        <div className="bg-[#1313130d] w-[90%] mx-auto px-5 py-4 lg:py-8 rounded-2xl">
            <div className="hero-content w-4/5 mx-auto flex-col lg:flex-row-reverse justify-between">
                <img src={bannerImg} className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold font-play leading-tight lg:leading-snug">
                        Books to freshen up <br /> your bookshelf</h1>                   
                    <NavLink to="/books" className="btn bg-[#23BE0A] text-white mt-4 lg:mt-8">
                        View The List</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;