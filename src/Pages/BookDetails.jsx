import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);

    const { bookName, author, image, rating, review, category, tags, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div className="hero w-[90%] mx-auto mt-5">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="bg-base-200 w-1/2 mx-auto flex justify-center p-3 rounded-3xl">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl h-[100vh]" />
                </div>
                <div className="w-3/5">
                    <h1 className="text-4xl font-bold font-play">{bookName}</h1>
                    <p className="text-lg pb-3 mt-3">By: {author}</p>
                    <hr />
                    <p className="py-3 font-bold">{category}</p>
                    <hr />
                    <p className="py-6"><span className="font-bold">Review:</span> {review.slice(0, 500)}...</p>
                    <p className="py-6">
                        <span className="font-bold mr-3">Tags</span>
                        {
                            tags.map(tag => <div key={tag} className="badge mr-2 bg-[#1313130d] text-[#23BE0A] font-bold p-4">#{tag}</div>)
                        }
                    </p>
                    <hr />
                    <div className="details w-3/5 my-6 flex justify-between">
                        <div className="pages space-y-2">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>

                        </div>
                        <div className="pages font-bold space-y-2">
                            <p>{totalPages}</p>
                            <p className="text-right">{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="btn-section flex gap-4">
                        <a className="btn bg-[#23BE0A] text-white font-semibold px-6 border-2 border-[#23BE0A] 
                hover:text-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A]">Read</a>
                        <a className="btn bg-[#59C6D2] text-white font-semibold px-6 border-2 border-[#59C6D2] 
                hover:text-[#59C6D2] hover:bg-transparent hover:border-[#59C6D2]">Wishlist</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetails.propTypes = {
    book: PropTypes.obj,
    bookId: PropTypes.number,
    bookName: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.string,
    review: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.array,
    totalPages: PropTypes.number,
    publisher: PropTypes.string,
    yearOfPublishing: PropTypes.number,
}

export default BookDetails;