import React from 'react';

const HowItWorks = () => {
    return (
        <div className='my-10'>
            <div className="m-auto w-[80%] bg-[#fff9fd] md:flex p-5">
                <div className=" md:space-y-5">
                    <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.!</h1>
                    <div className="flex items-center">
                        <div className="">
                            {/* <input type="serch" placeholder='locate a rewarding store near you' className='w-[50%] p-2' /> */}
                            <p className="bg-white py-3 px-5">locate a rewarding store near you</p>
                        </div>
                        <div className="">
                            <i className="bg-[#e51b48] rounded px-6 py-3 text-white"></i>
                        </div>
                    </div>

                    <ul className=''>
                        <div className="flex gap-5 ">
                            <li className="rounded hover h-[161px] w-[187px] flex flex-col text-center justify-center">Lorem Ipsum dolor</li>

                            <li className="hover:hover h-[161px] w-[187px] flex flex-col text-center justify-center">Lorem Ipsum dolor</li>

                            <li className="hover:hover h-[161px] w-[187px] flex flex-col text-center justify-center">Lorem Ipsum dolor</li>
                        </div>
                        <div className="flex my-5">
                            <li className="hover:hover h-[161px] w-[187px] flex flex-col text-center justify-center">Lorem Ipsum dolor</li>
                            <li className="hover:hover h-[161px] w-[187px] flex flex-col text-center justify-center">Lorem Ipsum dolor</li>
                        </div>
                    </ul>
                </div>

                <div className="">
                    <img src="" alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;