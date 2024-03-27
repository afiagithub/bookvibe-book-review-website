import PropTypes from 'prop-types';

const PriceCard = ({prices}) => {
    const {package_name, price, features, short_description} = prices;
    return (
        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 mx-6 lg:mx-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                <div className="space-y-2">
                    <h4 className="text-xl font-bold">{package_name}</h4>
                    <span className="text-4xl font-bold">{price}</span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-600">{short_description}</p>
                <ul className="flex-1 mb-6 dark:text-gray-600 flex-grow">
                    {
                        features.map((feature, idx) => <li key={idx} className="flex mb-2 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#23BE0A]">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                    </li>)
                    }
                    
                </ul>
                <button type="button" className="btn bg-[#23BE0A] text-white text-xl 
                        font-semibold px-6 border-2 border-[#23BE0A] hover:text-[#23BE0A] hover:bg-transparent 
                        hover:border-[#23BE0A]">Get Started</button>
            </div>
        </div>
    );
};

PriceCard.propTypes = {
    prices: PropTypes.object,
    package_name: PropTypes.string,
    price: PropTypes.string,
    short_description: PropTypes.string,
    features: PropTypes.arr
}

export default PriceCard;