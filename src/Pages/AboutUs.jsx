import coverImg from "../../public/about.jpg"

const AboutUs = () => {
    return (
        <div className="lg:w-[90%] mx-5 lg:mx-auto lg:my-16 ">
            <div className="hero">
                <div className="flex flex-col lg:flex-row-reverse justify-between gap-5">
                    <img src={coverImg} className="lg:w-2/5 rounded-lg shadow-2xl" />
                    <div className="lg:w-3/5">
                        <h1 className="font-play leading-snug text-5xl font-bold">Explore, Engage, Envision: Where Every Page Comes Alive!</h1>
                        <p className="py-8 lg:w-4/5 ">At <span className="text-[#23BE0A] font-bold">Book Vibe</span>,
                            we are passionate about cultivating a vibrant community
                            of book lovers from all corners of the globe. With an extensive library spanning genres,
                            authors, and eras, we provide a virtual sanctuary where readers can indulge their literary
                            cravings and discover new worlds with every turn of the page.
                            Join us in celebrating the power of storytelling and let your imagination take flight
                            in the infinite realms of literature</p>
                    </div>
                </div>
            </div>

            <section className="py-10 my-10 rounded-2xl dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4 font-bold text-lg">Fill in the form to contact us</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Banani, Road No. 22, Dhaka-1213</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>01516111914</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>bookvibe@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1 text-xl font-bold">Full name</span>
                            <input type="text" placeholder="John Doe" 
                            className="block mt-3 py-3 pl-4 w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-[#23BE0A] dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-xl font-bold">Email address</span>
                            <input type="email" placeholder="john@gmail.com" 
                            className="block mt-3 py-3 pl-4 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 
                            focus:dark:ring-[#23BE0A] dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-xl font-bold">Message</span>
                            <textarea rows="3" className="block mt-3 py-3 pl-4 w-full 
                            rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-[#23BE0A] dark:bg-gray-100"></textarea>
                        </label>
                        <button type="button" className="btn bg-[#23BE0A] text-white text-xl 
                        font-semibold px-6 border-2 border-[#23BE0A] hover:text-[#23BE0A] hover:bg-transparent 
                        hover:border-[#23BE0A]">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;