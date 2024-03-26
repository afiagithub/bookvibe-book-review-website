import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Books from "../Components/Books";

const Home = () => {
    const bookList = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books bookList={bookList}></Books>
        </div>
    );
};

export default Home;