import { useLoaderData } from "react-router-dom";
import PriceCard from "../Components/PriceCard";

const PricingPage = () => {
    const priceData = useLoaderData();
    return (
        <section className="py-20 dark:bg-gray-100 dark:text-gray-800">
            <div className="container px-4 lg:mx-auto lg:w-[90%]">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracking-wider uppercase dark:text-[#23BE0A]">Pricing</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                </div>
                <div className="flex flex-wrap items-stretch -mx-4">
                    {
                        priceData.map((prices) => <PriceCard key={prices.id} prices={prices}></PriceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PricingPage;