import { IoIosArrowDown } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooksCard from "../Components/ListedBooksCard";
import { getBooks } from "../utils";

const BookList = () => {
    const readBooksList = getBooks(1);
    const wishBooksList = getBooks(2);

    return (
        <div className="w-[90%] mx-auto">
            <div className="list-heading bg-[#1313130d] text-center rounded-2xl">
                <h1 className="text-3xl font-bold py-8">Books</h1>
            </div>
            <div className="text-center my-5">
                <a className="btn bg-[#23BE0A] text-white font-semibold px-6 border-2 border-[#23BE0A] 
                hover:text-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A]">Sort By<IoIosArrowDown /></a>
            </div>
            <div className="list-content">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            readBooksList.map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            wishBooksList.map((bookList, idx) => <ListedBooksCard key={idx} bookList={bookList}></ListedBooksCard>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BookList;