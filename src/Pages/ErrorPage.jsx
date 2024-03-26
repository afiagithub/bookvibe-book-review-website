import { useNavigate } from "react-router-dom";
import alertImg from "../../public/404-error.png"

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <img className="w-52" src={alertImg} alt="" />
            <h1 className="text-3xl font-bold mt-8 mb-2 uppercase">Oops! Page not found</h1>
            <p className="font-semibold text-xl text-rose-700">Sorry the page you are looking for 
            does not exists</p>
            <button onClick={() => navigate('/')} 
            className="btn my-10 text-2xl text-white bg-rose-700 rounded-full border-4 border-gray-700 
            hover:border-rose-700 hover:bg-transparent hover:text-rose-700">
                Go To HomePage</button>
        </div>
    );
};

export default ErrorPage;