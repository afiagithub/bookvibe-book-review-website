import BookCard from "./BookCard";
import PropTypes from 'prop-types';

const Books = ({bookList}) => {
    return (
        <div className="my-8 lg:my-16 w-[90%] mx-auto">
            <div className="books-heading text-center pt-10">
                <h1 className="font-play font-bold text-4xl">Books: {bookList.length}</h1>
            </div>
            <div className="books-content mx-5 grid grid-cols-3 gap-6 mt-12">
                {
                    bookList.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
        
    );
};

Books.propTypes = {
    bookList: PropTypes.array
}

export default Books;