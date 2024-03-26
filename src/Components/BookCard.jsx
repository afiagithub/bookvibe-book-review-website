import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const BookCard = ({book}) => {
    const {bookId, bookName, author, image, rating, category, tags} = book;

    return (
        <NavLink to={`/${bookId}`} className="card w-[370px] bg-base-100 border-2 border-[#13131326]">
            <figure className="p-4 mx-4 my-3 rounded-3xl bg-[#13131326]"><img className="h-80 w-64" src={image} alt="cover" />
            </figure>
            <div className="card-body pt-4 pl-6">
                <div className="card-actions justify-start flex-grow">
                    {
                        tags.map(tag => <div key={tag} className="badge bg-[#1313130d] text-[#23BE0A] font-bold p-4">{tag}</div>)
                    }
                </div>
                <h2 className="card-title font-play text-2xl mt-4">
                    {bookName}
                </h2>
                <p className="text-sm pb-3">By: {author}</p>
                <hr />
                <div className="category flex flex-row justify-between w-full font-semibold">
                    <p>{category}</p>
                    <div className="rating flex flex-row items-center justify-center gap-2">
                        <p className="text-right">{rating}</p>
                        <CiStar className="text-xl" />
                    </div>

                </div>
            </div>
        </NavLink>
    );
};

BookCard.propTypes = {
    book: PropTypes.obj,
    bookId: PropTypes.number,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.array,
}

export default BookCard;