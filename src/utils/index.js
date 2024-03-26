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
    let readBooks = getBooks(1)
    if (type === 1) {
        const isExist = readBooks.find(b => b.bookId === book.bookId);
        if (isExist) {
            return toast.error('You Have Already Read This Book!')
        }
        readBooks.push(book)
        localStorage.setItem('readBooks', JSON.stringify(readBooks))
        toast.success('Added To Read List Successfully!')
    }
    else {
        let wishBooks = getBooks(2)
        const isExist = wishBooks.find(b => b.bookId === book.bookId)
        const inReadlist = readBooks.find(b => b.bookId === book.bookId)
        if (isExist) {
            return toast.error('Already Wishlisted!')
        }
        else if (inReadlist) {
            return toast.error('Can Not Wishlist This Book (Already Read)')
        }
        wishBooks.push(book)
        localStorage.setItem('wishBooks', JSON.stringify(wishBooks))
        toast.success('Added To Wishlist Successfully!')
    }
}

export const deleteBook = id => {
    let wishBooks = getBooks(2)
    const isExist = wishBooks.find(b => b.bookId === id)
    if (isExist) {
        const remaining = wishBooks.filter(book => book.bookId !== id)
        localStorage.setItem('wishBooks', JSON.stringify(remaining))
        toast.success('Book Removed from Wishlist!')
    }
}