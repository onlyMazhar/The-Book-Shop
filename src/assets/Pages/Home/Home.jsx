import React from 'react';
import '../../../index.css'

const Home = () => {
    return (
        <div className='container mx-auto all-text '>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full  flex flex-col-reverse md:flex-row  justify-around items-center h-[350px] md:h-[520px]">
                    <div className='w-[80%] md:w-[25%] flex flex-col  gap-8'>
                        <h1 className='text-4xl md:text-7xl title-font'>Life of PI</h1>
                        <p className='text-[#7A7A7A] text-[.9rem]'>The true story of Christopher McCandless, who abandoned his possessions and family to live a life of solitude in the Alaskan wilderness. </p>
                        <div>
                            <button className='btn bg-transparent border-[#C0C0C0]'>Reade More</button>
                        </div>
                    </div>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-[30%]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle bg-[#C0C0C0]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#C0C0C0]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full  flex flex-col-reverse md:flex-row  justify-around items-center h-[350px] md:h-[520px]">
                    <div className='w-[80%] md:w-[25%] flex flex-col  gap-8'>
                        <h1  className='text-4xl md:text-7xl title-font'>Life Around</h1>
                        <p className='text-[#7A7A7A] text-[.9rem]'>The true story of Christopher McCandless, who abandoned his possessions and family to live a life of solitude in the Alaskan wilderness. </p>
                        <div>
                            <button className='btn bg-transparent border-[#C0C0C0]'>Reade More</button>
                        </div>
                    </div>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-[30%]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-[#C0C0C0]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#C0C0C0]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full  flex flex-col-reverse md:flex-row  justify-around items-center h-[350px] md:h-[520px]">
                    <div className='w-[80%] md:w-[25%] flex flex-col  gap-8'>
                        <h1  className='text-4xl md:text-7xl title-font'>Life of the wild</h1>
                        <p className='text-[#7A7A7A] text-[.9rem]'>The true story of Christopher McCandless, who abandoned his possessions and family to live a life of solitude in the Alaskan wilderness. </p>
                        <div>
                            <button className='btn bg-transparent border-[#C0C0C0]'>Reade More</button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        />
                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-[#C0C0C0]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#C0C0C0]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full  flex flex-col-reverse md:flex-row  justify-around items-center h-[350px] md:h-[520px]">
                    <div className='w-[80%] md:w-[25%] flex flex-col  gap-8'>
                        <h1  className='text-4xl md:text-7xl title-font'>Life In Wild</h1>
                        <p className='text-[#7A7A7A] text-[.9rem]'>The true story of Christopher McCandless, who abandoned his possessions and family to live a life of solitude in the Alaskan wilderness. </p>
                        <div>
                            <button className='btn bg-transparent border-[#C0C0C0] text-'>Reade More</button>
                        </div>
                    </div>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-[30%]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle bg-[#C0C0C0]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#C0C0C0]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;