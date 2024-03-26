import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const ListedBooksCard = ({ bookList }) => {
    const { bookId, bookName, author, image, rating, review, category, tags, totalPages, publisher, yearOfPublishing } = bookList;
    return (
        <div className="card lg:card-side px-4 my-4 bg-base-100 border-2 border-[#13131326]">
            <figure className="p-3"><img className="w-44 rounded-2xl" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-play text-2xl font-bold">{bookName}</h2>
                <p className="">By: {author}</p>
                <div className="flex flex-row gap-3 items-center">
                    <p className="">
                        <span className="font-bold mr-3">Tags</span>
                        {
                            tags.map(tag => <div key={tag} className="badge mr-2 bg-[#1313130d] text-[#23BE0A] font-bold p-4">#{tag}</div>)
                        }
                    </p>
                    <p className="flex flex-row gap-2 items-center text-lg">
                        <span className="text-2xl"><CiLocationOn /></span>
                        Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex flex-row gap-3 items-center text-[#13131399]">
                    <p className="flex items-center gap-2"><span className="text-2xl"><IoPeopleOutline /></span>Publisher: {publisher}</p>
                    <p className="flex items-center gap-2"><span className="text-2xl"><GiBlackBook /></span>Page: {totalPages}</p>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="badge bg-[#328eff26] text-base text-[#328EFF] p-5 font-bold">
                        Category: {category}</div>
                    <div className="badge bg-[#ffac3326] text-base text-[#FFAC33] p-5 font-bold">
                        Rating: {rating}</div>
                    <NavLink to={`/${bookId}`} className="btn bg-[#23BE0A] text-white font-semibold px-6 border-2 border-[#23BE0A] 
                hover:text-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] rounded-full">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksCard;