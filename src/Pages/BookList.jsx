import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooksCard from "../Components/ListedBooksCard";
import { getBooks } from '../utils';
import { useState } from 'react';

const BookList = () => {
    let readBooksList = getBooks(1);
    let wishBooksList = getBooks(2);
    const [sortState, setSortState] = useState(true)
    const [sortedYear, setSortedYear] = useState(false)
    const [sortedRate, setSortedRate] = useState(false)
    const [sortedPage, setSortedPage] = useState(false)

    const handleSort = (e) => {
        const sortCriteria = (e.target.value);
        if (sortCriteria === 'rating') {
            setSortedRate(true)
            setSortState(false)
            setSortedYear(false)
            setSortedPage(false)
        }
        else if (sortCriteria === 'totalPages') {
            setSortedPage(true)
            setSortState(false)
            setSortedYear(false)
            setSortedRate(false)
        }
        else {
            setSortedYear(true)
            setSortState(false)
            setSortedRate(false)
            setSortedPage(false)
        }
    }
    console.log(sortedYear)

    return (
        <div className="w-[90%] mx-auto">
            <div className="list-heading bg-[#1313130d] text-center rounded-2xl">
                <h1 className="text-3xl font-bold py-8">Books</h1>
            </div>

            <div className="text-center my-5">
                <select onChange={handleSort} className="p-3 text-[#23BE0A] font-semibold border-2 border-[#23BE0A] 
                hover:text-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] rounded-lg">
                    <option selected>Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number Of Pages</option>
                    <option value="yearOfPublishing">Published Year</option>
                </select>
            </div>
            <div className="list-content">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            sortedRate && readBooksList.sort((book1, book2) => {
                                return book2.rating - book1.rating;
                            }).map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                        {
                            sortedPage && readBooksList.sort((book1, book2) => {
                                return book2.totalPages - book1.totalPages;
                            }).map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                        {
                            sortedYear && readBooksList.sort((book1, book2) => {
                                return book2.yearOfPublishing - book1.yearOfPublishing;
                            }).map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                        {
                            sortState && readBooksList.map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            sortedRate && wishBooksList.sort((book1, book2) => {
                                return book2.rating - book1.rating;
                            }).map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                        {
                            sortedPage && wishBooksList.sort((book1, book2) => {
                                return book2.totalPages - book1.totalPages;
                            }).map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                        {
                            sortedYear && wishBooksList.sort((book1, book2) => {
                                return book2.yearOfPublishing - book1.yearOfPublishing;
                            }).map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                        {
                            sortState && wishBooksList.map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BookList;