import toast from 'react-hot-toast'

export const getBooks = (type) => {
    let readBooks = [];
    let wishBooks = [];
    if (type === 1) {
        const storedBooks = localStorage.getItem('readBooks')
        if (storedBooks) {
            readBooks = JSON.parse(storedBooks)
        }
        return readBooks
    }
    else {
        const wishListedBooks = localStorage.getItem('wishBooks')
        if (wishListedBooks) {
            wishBooks = JSON.parse(wishListedBooks)
        }
        return wishBooks
    }

}

export const saveBooks = (type, book) => {
    if (type === 1) {
        let readBooks = getBooks(1)
        const isExist = readBooks.find(b => b.bookId === book.bookId);
        if (isExist) {
            return toast.error('Already Read!')
        }
        readBooks.push(book)
        localStorage.setItem('readBooks', JSON.stringify(readBooks))
        toast.success('Added To Read List Successfully!')
    }
    else{
        let wishBooks = getBooks(2)
        const isExist = wishBooks.find(b => b.bookId === book.bookId)
        if (isExist) {
            return toast.error('Already Read!')
        }
        wishBooks.push(book)
        localStorage.setItem('wishBooks', JSON.stringify(wishBooks))
        toast.success('Added To Wishlist Successfully!')
    }
}

export const deleteBlog = id => {
    let readBooks = getBooks()
    const remaining = readBooks.filter(b => b.id !== id)
    localStorage.setItem('readBooks', JSON.stringify(remaining))
    toast.success('Book Removed from List!')
}